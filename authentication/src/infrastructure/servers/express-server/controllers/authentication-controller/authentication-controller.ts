import {
  RequestHandler,
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
import detailedSecureUserToResponse from '../../../dtos/user-dto/user-server-mappers';
import AuthenticationUsecase from '../../../../../domain/usecases/authentication-usecase/authentication-usecase';

class AuthenticationController {
  constructor(
    private readonly tokenService: TokenService,
    private readonly authenticationUsecase: AuthenticationUsecase,
    private readonly createUserProducer: AMQPBroker<CreateUserBroker>,
  ) {}

  login: RequestHandler = async (req, res, next) => {
    try {
      const payload = CreateUserCredentialsRequest.parse(req.body);

      const secureUser = await this.authenticationUsecase.login({
        email: payload.email,
        password: payload.password,
      });

      const token = await this.tokenService.generate(secureUser, '6h');

      res.setHeader('Authorization', `Bearer ${token}`).sendStatus(statusCodes.OK);
    } catch (e) {
      next(e);
    }
  };

  signup: RequestHandler = async (req, res, next) => {
    try {
      const payload = CreateUserRequest.parse(req.body);

      const secureUser = await this.authenticationUsecase.signup({
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
      });

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.CREATED).send({ result: secureUserResponse });

      await this.createUserProducer.produce('User:CreateUser', {
        user_id: secureUser.id,
        username: secureUser.username,
      });
    } catch (e) {
      next(e);
    }
  };
}

export default AuthenticationController;
