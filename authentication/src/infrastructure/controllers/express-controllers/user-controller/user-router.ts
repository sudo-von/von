import express from 'express';
import ExpressUserController from './user-controller';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import RabbitMQUpdateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-update-profile-producer';
import jwtAuthHandler from '../middlewares/jwt-auth-handler';

const createUserRouter = (
  userUsecase: UserUsecase,
  messageBroker: RabbitMQUpdateProfileProducer,
) => {
  const userController = new ExpressUserController(userUsecase, messageBroker);

  const router = express.Router();

  router.get('/username/:username', userController.getUserByUsername);
  router.patch('/:id', jwtAuthHandler, userController.updateProfileById);

  return router;
};

export default createUserRouter;
