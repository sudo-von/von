import express from 'express';
import AuthUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';
import ExpressAuthenticationController from './user-controller';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import RabbitMQUpdateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-update-profile-producer';

const createUserRouter = (
  userUsecase: UserUsecase,
  messageBroker: RabbitMQUpdateProfileProducer,
) => {
  const authController = new Express(userUsecase, messageBroker);

  const router = express.Router();

  router.post('/signup', authController.signup);
  router.post('/authenticate', authController.authenticate);

  return router;
};

export default createUserRouter;
