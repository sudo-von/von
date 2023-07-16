import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from 'http-status-codes';
import {
  CreateUserRequest,
  CreateUserCredentialsRequest,
} from '../../../dtos/user-dto/user-server-request-dtos';
import {
  CreateUserBroker,
} from '../../../../brokers/dtos/user-dto/user-broker-dtos';
import AMQPBroker from '../../../../brokers/amqp-broker/amqp-broker';
import TokenService from '../../../../services/token-service/token-service';
import secureUserToSecureUserResponse from '../../../dtos/user-dto/user-server-mappers';
import AuthenticationUsecase from '../../../../../domain/usecases/authentication-usecase/authentication-usecase';

class AuthenticationController {
  constructor(
    private readonly tokenService: TokenService,
    private readonly authenticationUsecase: AuthenticationUsecase,
    private readonly createUserProducer: AMQPBroker<CreateUserBroker>,
  ) {}

  signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = CreateUserRequest.parse(req.body);

      const secureUser = await this.authenticationUsecase.signup({
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
      });

      const secureUserResponse = secureUserToSecureUserResponse(secureUser);

      res.status(statusCodes.OK).send({ result: secureUserResponse });

      await this.createUserProducer.produce('User:CreateUser', {
        user_id: secureUser.id,
        username: secureUser.username,
      });
    } catch (e) {
      next(e);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = CreateUserCredentialsRequest.parse(req.body);

      const secureUser = await this.authenticationUsecase.login({
        email: payload.email,
        password: payload.password,
      });

      const token = await this.tokenServiceINVALID_AVATAR_FILE_MIME_TYPE(secureUser);

      res.setHeader('Authorization', `Bearer ${token}`).sendStatus(statusCodes.OK);
    } catch (e) {
      next(e);
    }
  };
}

export default AuthenticationController;
