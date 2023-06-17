import express from 'express';
import createQuestionRouter from './question-controller/express-question-router';
import QuestionUsecase from '../../../domain/usecases/question-usecase';
import errorHandler from './middlewares/error-handler';
import TokenService from '../../services/token-service/token-service';
import ProfileUsecase from '../../../domain/usecases/profile-usecase';
import createProfileRouter from './profile-controller/profile-router';

const configureControllers = (
  tokenService: TokenService,
  questionUsecase: QuestionUsecase,
  profileUsecase: ProfileUsecase,
) => {
  const questionRouter = createQuestionRouter(questionUsecase, profileUsecase, tokenService);
  const profileRouter = createProfileRouter(profileUsecase);

  const app = express();
  app.use(express.json());
  app.set('trust proxy', true);
  app.use('/v1/questions', questionRouter);
  app.use('/v1/profiles', profileRouter);
  app.use(errorHandler);

  return app;
};

export default configureControllers;
