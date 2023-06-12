import express, { Router } from 'express';
import AuthUsecase from '../../domain/usecases/auth-usecase';
import errorHandler from '../controllers/express-controllers/middlewares/error-handler';
import exceptionHandler from '../controllers/express-controllers/middlewares/exception-handler';
import TokenService from '../../domain/services/token-service';
import LoggerService from '../../domain/services/logger-service';
import ExpressAuthControllerImpl from '../controllers/express-controllers/express-auth-controller';
import bodyHandler from '../controllers/express-controllers/middlewares/body-handler';

const createAuthRouter = (
  tokenService: TokenService,
  authController: ExpressAuthControllerImpl,
) => {
  const router = express.Router();
  router.post('/refresh', authController.refresh);
  router.post('/authenticate', authController.auth);
  router.post('/signup', authController.signup);
  router.use(bodyHandler);
  router.use(exceptionHandler);
  router.use(errorHandler);
  return router;
};

const createApp = (router: Router) => {
  const app = express();
  app.use(express.json());
  app.use('/v1/auth', router);
  return app;
};

const createAuthController = (
  tokenService: TokenService,
  loggerService: LoggerService,
  authUsecase: AuthUsecase,
  port: number,
) => {
  const authController = new ExpressAuthControllerImpl(authUsecase, loggerService);
  const router = createAuthRouter(tokenService, authController);
  const app = createApp(router);
  app.listen(port, () => {
    loggerService.log('info', `💻 [APIServiceImpl][start]: Starting application on port ${port}.`);
  });
};

export default createAuthController;
