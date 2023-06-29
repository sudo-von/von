import 'express-async-errors';
import express, {
  Router,
} from 'express';
import bodyMiddleware from './middlewares/body-middleware';
import errorMiddleware from './middlewares/error-middleware';

const configureControllers = (
  SERVER_PORT: number,
  profileRouter: Router,
) => {
  try {
    const app = express();
    app.use(express.json());

    app.set('trust proxy', true);

    app.use('/api/v1/profile', profileRouter);

    app.use(bodyMiddleware);
    app.use(errorMiddleware);

    app.listen(SERVER_PORT, () => {
      console.log(`🚀 Controllers have been configured on port ${SERVER_PORT}.`);
    });
  } catch (e) {
    throw new Error(`An error occurred with the controllers: ${(e as Error).message}.`);
  }
};

export default configureControllers;
