import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  createUserController,
  createUserCredentialsController,
} from '../../dtos/user-controller-dtos';
import statusCodes from '../../status-codes';
import {
  InvalidFileParameterControllerError,
} from '../../errors/common-controller-error';
import {
  UserCredentials,
} from '../../../../domain/entities/user/user-entities';
import TokenService from '../../../services/token-service/token-service';
import AuthenticationUsecase from '../../../../domain/usecases/authentication-usecase';
import restrictedUserToRestrictedUserController from '../../mappers/user-controller-mappers';
import RabbitMQCreateUserProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-create-user-producer';

class ExpressAuthenticationController {
  constructor(
    private tokenService: TokenService,
    private authenticationUsecase: AuthenticationUsecase,
    private createUserProducer: RabbitMQCreateUserProducer,
  ) {}

  authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = createUserCredentialsController.parse(req.body);

      const userCredentials: UserCredentials = {
        email,
        password,
      };

      const restrictedUser = await this.authenticationUsecase.authenticate(userCredentials);

      const token = this.tokenService.generateToken(restrictedUser);

      res.setHeader('Authorization', `Bearer ${token}`).sendStatus(statusCodes.success.ok);
    } catch (e) {
      next(e);
    }
  };

  signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { file, body } = req;

      if (!file) throw InvalidFileParameterControllerError;

      const payload = createUserController.parse(body);

      const createdUser = await this.authenticationUsecase.signup({
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
        profilePicture: {
          size: file.size,
          name: file.originalname,
          buffer: file.buffer,
          mimetype: file.mimetype,
        },
      });

      const restrictedUser = restrictedUserToRestrictedUserController(createdUser);

      res.status(statusCodes.success.ok).send({ result: restrictedUser });

      await this.createUserProducer.produceMessage('User:CreateUser', {
        user_id: restrictedUser.id,
        username: restrictedUser.username,
      });
    } catch (e) {
      next(e);
    }
  };
}

export default ExpressAuthenticationController;
