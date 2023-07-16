import {
  Router,
} from 'express';
import {
  CreateUserBroker,
} from '../../../../brokers/dtos/user-dto/user-broker-dtos';
import AuthenticationController from './authentication-controller';
import AMQPBroker from '../../../../brokers/amqp-broker/amqp-broker';
import TokenService from '../../../../services/token-service/token-service';
import AuthenticationUsecase from '../../../../../domain/usecases/authentication-usecase/authentication-usecase';

const configureAuthenticationRouter = (
  tokenService: TokenService,
  authenticationUsecase: AuthenticationUsecase,
  createUserProducer: AMQPBroker<CreateUserBroker>,
) => {
  const authenticationController = new AuthenticationController(
    tokenService,
    authenticationUsecase,
    createUserProducer,
  );

  const router = Router();

  router.post('/signup', authenticationController.signup);
  router.post('/login', authenticationController.login);

  return router;
};

export default configureAuthenticationRouter;
