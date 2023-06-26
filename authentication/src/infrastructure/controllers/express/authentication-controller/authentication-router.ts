import express from 'express';
import ExpressAuthenticationController from './authentication-controller';
import AuthUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateProfileProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-create-user-producer';

const createExpressAuthenticationRouter = (
  authUsecase: AuthUsecase,
  messageBroker: RabbitMQCreateProfileProducer,
) => {
  const authController = new ExpressAuthenticationController(authUsecase, messageBroker);

  const router = express.Router();

  router.post('/signup', authController.signup);
  router.post('/authenticate', authController.authenticate);

  return router;
};

export default createExpressAuthenticationRouter;
