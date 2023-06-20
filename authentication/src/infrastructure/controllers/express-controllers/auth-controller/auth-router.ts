import express from 'express';
import ExpressAuthController from './auth-controller';
import AuthUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';

const createAuthenticationRouter = (
  authUsecase: AuthUsecase,
  messageBroker: RabbitMQCreateProfileProducer,
) => {
  const authController = new ExpressAuthController(authUsecase, messageBroker);

  const router = express.Router();

  router.post('/signup', authController.signup);
  router.post('/authenticate', authController.authenticate);

  return router;
};

export default createAuthenticationRouter;
