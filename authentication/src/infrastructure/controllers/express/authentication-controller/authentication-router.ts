import multer from 'multer';
import express from 'express';
import TokenService from '../../../services/token-service/token-service';
import ExpressAuthenticationController from './authentication-controller';
import ILoggerService from '../../../services/logger-service/logger-service';
import AuthenticationUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateUserProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-create-user-producer';

const configureAuthenticationRouter = (
  tokenService: TokenService,
  loggerService: ILoggerService,
  authenticationUsecase: AuthenticationUsecase,
  createUserProducer: RabbitMQCreateUserProducer,
) => {
  const authController = new ExpressAuthenticationController(
    tokenService,
    authenticationUsecase,
    createUserProducer,
  );

  const upload = multer();
  const router = express.Router();

  router.post('/signup', upload.single('profile_picture'), authController.signup);
  router.post('/authenticate', authController.authenticate);

  loggerService.info('Authentication router has been configured.');

  return router;
};

export default configureAuthenticationRouter;
