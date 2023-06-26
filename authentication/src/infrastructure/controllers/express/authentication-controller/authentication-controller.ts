import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  CreateControllerUserDto,
  RestrictedControllerUserDto,
  CreateControllerUserCredentialsDto,
} from '../../dtos/controller-user-dto';
import statusCodes from '../../status-codes';
import {
  CreateUserEntity,
} from '../../../../domain/entities/user-entity';
import {
  MessageBrokerCreateUserDto,
} from '../../../message-brokers/dtos/message-broker-user-dto';
import TokenService from '../../../services/token-service/token-service';
import AuthenticationUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateUserProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-create-user-producer';

class ExpressAuthenticationController {
  constructor(
    private tokenService: TokenService,
    private authenticationUsecase: AuthenticationUsecase,
    private createUserProducer: RabbitMQCreateUserProducer,
  ) {}

  authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = CreateControllerUserCredentialsDto.parse(req.body);

      const restrictedUser = await this.authenticationUsecase.authenticate(email, password);

      const token = this.tokenService.generateToken(restrictedUser);

      return res.setHeader('Authorization', `Bearer ${token}`).sendStatus(statusCodes.success.ok);
    } catch (e) {
      return next(e);
    }
  };

  signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = CreateControllerUserDto.parse(req.body);

      const createUserEntity: CreateUserEntity = {
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
        profilePicture: payload.profile_picture,
      };

      const user = await this.authenticationUsecase.signup(createUserEntity);

      const restrictedControllerUserDto: RestrictedControllerUserDto = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profile_picture: user.profilePicture,
      };

      res.status(statusCodes.success.created).send({ result: restrictedControllerUserDto });

      const messageBrokerCreateUserDto: MessageBrokerCreateUserDto = {
        user_id: user.id,
        username: user.username,
      };

      return await this.createUserProducer.produceMessage('User:CreateUser', messageBrokerCreateUserDto);
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressAuthenticationController;
