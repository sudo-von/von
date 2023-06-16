import express from 'express';
import createQuestionRouter from './question-controller/express-question-router';
import QuestionUsecase from '../../../domain/usecases/question-usecase';
import errorHandler from './middlewares/error-handler';
import TokenService from '../../services/token-service/token-service';

const configureControllers = (
  tokenService: TokenService,
  questionUsecase: QuestionUsecase,
) => {
  const questionRouter = createQuestionRouter(questionUsecase, tokenService);

  const app = express();
  app.use(express.json());
  app.set('trust proxy', true);
  app.use('/v1/questions', questionRouter);
  app.use(errorHandler);

  return app;
};

export default configureControllers;
