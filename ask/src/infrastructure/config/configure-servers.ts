import 'express-async-errors';
import express, {
  Router,
} from 'express';
import LoggerService from '../services/logger-service/logger-service';
import bodyMiddleware from '../servers/express-server/middlewares/body-middleware';
import errorMiddleware from '../servers/express-server/middlewares/error-middleware';

const configureServers = (
  SERVER_PORT: number,
  userRouter: Router,
  questionRouter: Router,
  loggerService: LoggerService,
) => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/question', questionRouter);

  app.use(bodyMiddleware);
  app.use(errorMiddleware);

  app.listen(SERVER_PORT, () => {
    loggerService.info(`🚀 Controllers have been configured on port ${SERVER_PORT}.`);
  });
};

export default configureServers;
