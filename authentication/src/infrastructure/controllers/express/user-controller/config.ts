import express from 'express';
import ExpressUserController from './user-controller';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import TokenService from '../../../services/token-service/token-service';
import IUserRepository from '../../../../domain/repositories/user-repository';
import authenticationMiddleware from '../middlewares/authentication-middleware';
import RabbitMQUpdateProfileProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-update-user-producer';

const configureUserRouter = (
  userUsecase: UserUsecase,
  tokenService: TokenService,
  userRepository: IUserRepository,
  messageBroker: RabbitMQUpdateProfileProducer,
) => {
  const userController = new ExpressUserController(userUsecase, messageBroker);

  const router = express.Router();

  router.get('/username/:username', userController.getUserByUsername);
  router.patch('/username/:username', authenticationMiddleware(tokenService, userRepository), userController.updateProfileByUsername);

  console.log('🔌 User router has been configured.');

  return router;
};

export default configureUserRouter;
