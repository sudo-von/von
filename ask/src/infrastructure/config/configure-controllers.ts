import 'express-async-errors';
import express, {
  Router,
} from 'express';
import LoggerService from '../services/logger-service/logger-service';
import bodyMiddleware from '../controllers/express/middlewares/body-middleware';
import errorMiddleware from '../controllers/express/middlewares/error-middleware';

const configureControllers = async (
  SERVER_PORT: number,
  userRouter: Router,
  questionRouter: Router,
  loggerService: LoggerService,
) => {
  try {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/v1/ask/user', userRouter);
    app.use('/api/v1/ask/question', questionRouter);

    app.use(bodyMiddleware);
    app.use(errorMiddleware);

    app.listen(SERVER_PORT, () => {
      loggerService.info(`🚀 Controllers have been configured on port ${SERVER_PORT}.`);
    });
  } catch (e) {
    throw new Error(`An error occurred with the controllers: ${(e as Error).message}.`);
  }
};

export default configureControllers;
