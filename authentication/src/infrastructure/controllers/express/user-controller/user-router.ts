import express from 'express';
import ExpressUserController from './user-controller';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import authenticationMiddleware from '../middlewares/authentication-middleware';
import RabbitMQUpdateProfileProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-update-user-producer';

const createUserRouter = (
  userUsecase: UserUsecase,
  messageBroker: RabbitMQUpdateProfileProducer,
) => {
  const userController = new ExpressUserController(userUsecase, messageBroker);

  const router = express.Router();

  router.get('/username/:username', userController.getUserByUsername);
  router.patch('/username/:username', authenticationMiddleware, userController.updateProfileByUsername);

  return router;
};

export default createUserRouter;
