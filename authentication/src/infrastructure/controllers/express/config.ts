import 'express-async-errors';
import express, { Router } from 'express';
import bodyMiddleware from './middlewares/body-middleware';
import errorMiddleware from './middlewares/error-middleware';

const configureControllers = (
  SERVER_PORT: number,
  userRouter: Router,
  authenticationRouter: Router,
) => {
  const app = express();
  app.use(express.json());

  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/authentication', authenticationRouter);

  app.use(bodyMiddleware);
  app.use(errorMiddleware);

  app.listen(SERVER_PORT, () => {
    console.log(`🚀 Controllers have been configured on port ${SERVER_PORT}.`);
  });
};

export default configureControllers;
