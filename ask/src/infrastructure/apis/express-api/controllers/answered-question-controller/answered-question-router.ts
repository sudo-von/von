import {
  Router,
} from 'express';
import AnsweredQuestionController from './answered-question-controller';
import validateIdMiddleware from '../../middlewares/validate-id-middleware';
import MetricUsecase from '../../../../../domain/usecases/metric-usecase/metric-usecase';
import AnsweredQuestionUsecase from '../../../../../domain/usecases/answered-question-usecase/answered-question-usecase';

const configureAnsweredQuestionRouter = (
  metricUsecase: MetricUsecase,
  answeredQuestionUsecase: AnsweredQuestionUsecase,
) => {
  const answeredQuestionController = new AnsweredQuestionController(
    metricUsecase,
    answeredQuestionUsecase,
  );

  const router = Router();

  router.get('/:id', validateIdMiddleware, answeredQuestionController.getAnsweredQuestionById);
  router.get('/username/:username', answeredQuestionController.getAnsweredQuestionsByUsername);

  return router;
};

export default configureAnsweredQuestionRouter;
