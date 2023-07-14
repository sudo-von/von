import multer from 'multer';
import express from 'express';
import ExpressUserController from './user-controller';
import UserUsecase from '../../../../domain/usecases/user-usecase/user-usecase';
import TokenService from '../../../services/token-service/token-service';
import LoggerService from '../../../services/logger-service/logger-service';
import IUserRepository from '../../../../domain/repositories/user-repository/user-repository';
import authenticationMiddleware from '../middlewares/authentication-middleware';
import RabbitMQUpdateUserProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-update-user-producer';

const configureUserRouter = (
  userUsecase: UserUsecase,
  tokenService: TokenService,
  loggerService: LoggerService,
  userRepository: IUserRepository,
  updateUserProducer: RabbitMQUpdateUserProducer,
) => {
  const userController = new ExpressUserController(userUsecase, updateUserProducer);

  const upload = multer();
  const router = express.Router();

  router.get('/username/:username', userController.getUserByUsername);
  router.patch(
    '/username/:username',
    authenticationMiddleware(tokenService, loggerService, userRepository),
    upload.single('profile_picture'),
    userController.updateProfileByUsername,
  );

  return router;
};

export default configureUserRouter;
