import express from 'express';
import ExpressAuthController from './express-auth-controller';
import bodyHandler from './middlewares/body-handler';
import exceptionHandler from './middlewares/exception-handler';
import errorHandler from './middlewares/error-handler';
import AuthUsecase from '../../../../domain/usecases/auth-usecase';
import LoggerService from '../../../../domain/services/logger-service';

const createAuthRouter = (authUsecase: AuthUsecase, loggerService: LoggerService, port: number) => {
  const authController = new ExpressAuthController(authUsecase, loggerService);

  const app = express();
  app.use(express.json());

  const router = express.Router();
  router.post('/refresh', authController.refresh);
  router.post('/authenticate', authController.auth);
  router.post('/signup', authController.signup);

  app.use('/v1/auth', router);
  app.use(bodyHandler);
  app.use(exceptionHandler);
  app.use(errorHandler);

  app.listen(port, () => {
    loggerService.log('info', `💻 [APIServiceImpl][start]: Starting application on port ${port}.`);
  });
};

export default createAuthRouter;
