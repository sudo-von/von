import 'express-async-errors';
import express from 'express';
import errorMiddleware from './middlewares/error-middleware';
import createProfileRouter from './profile-controller/profile-router';
import ProfileUsecase from '../../../domain/usecases/profile-usecase';
import TokenService from '../../services/token-service/token-service';

const configureControllers = (
  tokenService: TokenService,
  profileUsecase: ProfileUsecase,
  SERVER_PORT: number,
) => {
  const profileRouter = createProfileRouter(tokenService, profileUsecase);

  const app = express();

  app.use(express.json());

  app.set('trust proxy', true);

  app.use('/v1/profile', profileRouter);
  app.use(errorMiddleware);

  app.listen(SERVER_PORT, () => {
    console.log(`🚀: Starting application on port ${SERVER_PORT}.`);
  });
};

export default configureControllers;
