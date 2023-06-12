import express from 'express';
import ExpressAuthController from './express-auth-controller';
import validateRequestBodyHandler from './middlewares/validate-request-body-handler';
import exceptionHandler from './middlewares/exception-handler';
import errorHandler from './middlewares/error-handler';
import AuthUsecase from '../../../../domain/usecases/auth-usecase';
import LoggerService from '../../../../domain/services/logger-service';
import MessageBroker from '../../../message-brokers/message-broker';

const createAuthRouter = (
  authUsecase: AuthUsecase,
  loggerService: LoggerService,
  messageBroker: MessageBroker,
  port: number,
) => {
  const authController = new ExpressAuthController(authUsecase, loggerService, messageBroker);

  const app = express();
  app.use(express.json());

  const router = express.Router();
  router.post('/signup', authController.signup);
  router.post('/authenticate', authController.authenticate);

  app.use('/v1/auth', router);
  app.use(validateRequestBodyHandler);
  app.use(exceptionHandler);
  app.use(errorHandler);

  app.listen(port, () => {
    loggerService.log('info', `💻 [APIServiceImpl][start]: Starting application on port ${port}.`);
  });
};

export default createAuthRouter;
