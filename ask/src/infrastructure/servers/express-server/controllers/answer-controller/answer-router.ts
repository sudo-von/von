import {
  Router,
  RequestHandler,
} from 'express';
import AnswerController from './answer-controller';
import AnswerUsecase from '../../../../../domain/usecases/answer-usecase/answer-usecase';
import MetricUsecase from '../../../../../domain/usecases/metric-usecase/metric-usecase';

const configureAnswerRouter = (
  answerUsecase: AnswerUsecase,
  metricUsecase: MetricUsecase,
  authenticationHandler: RequestHandler,
) => {
  const answerController = new AnswerController(answerUsecase, metricUsecase);

  const router = Router();

  router.post('/question/:id', authenticationHandler, answerController.createAnswerByQuestionId);
  router.patch('/question/:id', authenticationHandler, answerController.updateAnswerByQuestionId);
  router.delete('/question/:id', authenticationHandler, answerController.deleteAnswerByQuestionId);

  return router;
};

export default configureAnswerRouter;
