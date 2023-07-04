import multer from 'multer';
import express from 'express';
import TokenService from '../../../services/token-service/token-service';
import ExpressAuthenticationController from './authentication-controller';
import AuthenticationUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateUserProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-create-user-producer';

const configureAuthenticationRouter = (
  tokenService: TokenService,
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

  return router;
};

export default configureAuthenticationRouter;
