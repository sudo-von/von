import {
  Router,
} from 'express';
import AnsweredQuestionController from './answered-question-controller';
import MetricUsecase from '../../../../../domain/usecases/metric-usecase';
import AnsweredQuestionUsecase from '../../../../../domain/usecases/answered-question-usecase';

const configureAnsweredQuestionRouter = (
  metricUsecase: MetricUsecase,
  answeredQuestionUsecase: AnsweredQuestionUsecase,
) => {
  const answeredQuestionController = new AnsweredQuestionController(
    metricUsecase,
    answeredQuestionUsecase,
  );

  const router = Router();

  router.get('/:id', answeredQuestionController.getAnsweredQuestionById);
  router.get('/username/:username', answeredQuestionController.getAnsweredQuestionsByUsername);

  return router;
};

export default configureAnsweredQuestionRouter;
