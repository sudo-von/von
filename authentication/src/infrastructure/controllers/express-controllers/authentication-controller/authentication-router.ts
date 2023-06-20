import express from 'express';
import AuthUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';
import ExpressAuthenticationController from './authentication-controller';

const createAuthenticationRouter = (
  authUsecase: AuthUsecase,
  messageBroker: RabbitMQCreateProfileProducer,
) => {
  const authController = new ExpressAuthenticationController(authUsecase, messageBroker);

  const router = express.Router();

  router.post('/signup', authController.signup);
  router.post('/authenticate', authController.authenticate);

  return router;
};

export default createAuthenticationRouter;
