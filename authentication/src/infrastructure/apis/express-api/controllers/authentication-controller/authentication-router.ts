import {
  Router,
} from 'express';
import AuthenticationController from './authentication-controller';
import AMQPBroker from '../../../../brokers/amqp-broker/amqp-broker';
import {
  CreateUserBroker,
} from '../../../../brokers/entities/user-entity/user-broker-entities';
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

  router.post('/login', authenticationController.login);
  router.post('/signup', authenticationController.signup);

  return router;
};

export default configureAuthenticationRouter;
