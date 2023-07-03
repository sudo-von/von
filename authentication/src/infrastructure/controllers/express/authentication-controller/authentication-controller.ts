import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  CreateUserControllerDto,
  RestrictedUserControllerDto,
  CreateUserCredentialsControllerDto,
} from '../../dtos/controller-user-dto';
import statusCodes from '../../status-codes';
import {
  CreateUserEntity,
} from '../../../../domain/entities/user/user-entity';
import {
  MessageBrokerCreateUserDto,
} from '../../../message-brokers/dtos/message-broker-user-dto';
import TokenService from '../../../services/token-service/token-service';
import AuthenticationUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateUserProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-create-user-producer';
import { InvalidFileParameterControllerError } from '../../errors/common-controller-error';

class ExpressAuthenticationController {
  constructor(
    private tokenService: TokenService,
    private authenticationUsecase: AuthenticationUsecase,
    private createUserProducer: RabbitMQCreateUserProducer,
  ) {}

  authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = CreateUserCredentialsControllerDto.parse(req.body);

      const restrictedUser = await this.authenticationUsecase.authenticate(email, password);

      const token = this.tokenService.generateToken(restrictedUser);

      return res.setHeader('Authorization', `Bearer ${token}`).sendStatus(statusCodes.success.ok);
    } catch (e) {
      return next(e);
    }
  };

  signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { file, body } = req;

      if (!file) throw InvalidFileParameterControllerError;
      console.log('🚀 ~ file: authentication-controller.ts:49 ~ ExpressAuthenticationController ~ signup= ~ file:', file);

      const payload = CreateUserControllerDto.parse(body);

      const createUserEntity: CreateUserEntity = {
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
      };
      console.log('🚀 ~ file: authentication-controller.ts:64 ~ ExpressAuthenticationController ~ signup= ~ createUserEntity:', createUserEntity);

      const createdUser = await this.authenticationUsecase.signup(createUserEntity);

      const restrictedUserControllerDto: RestrictedUserControllerDto = {
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        username: createdUser.username,
        profile_picture_url: createdUser.profilePictureUrl,
      };

      return res.status(statusCodes.success.ok).send({ result: restrictedUserControllerDto });
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressAuthenticationController;
