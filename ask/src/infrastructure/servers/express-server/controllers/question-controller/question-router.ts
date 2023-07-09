import {
  Router,
  RequestHandler,
} from 'express';
import QuestionController from './question-controller';
import MetricUsecase from '../../../../../domain/usecases/metric-usecase';
import QuestionUsecase from '../../../../../domain/usecases/question-usecase';

const configureQuestionRouter = (
  metricUsecase: MetricUsecase,
  questionUsecase: QuestionUsecase,
  authenticationHandler: RequestHandler,
) => {
  const questionController = new QuestionController(metricUsecase, questionUsecase);

  const router = Router();

  router.delete('/:id', authenticationHandler, questionController.deleteQuestionById);
  router.post('/username/:username', questionController.createQuestionByUsername);
  router.get('/username/:username', authenticationHandler, questionController.getQuestionsByUsername);

  return router;
};

export default configureQuestionRouter;
