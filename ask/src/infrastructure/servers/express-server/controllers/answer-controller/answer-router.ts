import {
  Router,
  RequestHandler,
} from 'express';
import AnswerController from './answer-controller';
import AnswerUsecase from '../../../../../domain/usecases/answer-usecase';
import MetricUsecase from '../../../../../domain/usecases/metric-usecase';

const configureAnswerRouter = (
  answerUsecase: AnswerUsecase,
  metricUsecase: MetricUsecase,
  authenticationHandler: RequestHandler,
) => {
  const answerController = new AnswerController(answerUsecase, metricUsecase);

  const router = Router();

  router.post('/:id', authenticationHandler, answerController.createAnswerByQuestionId);
  router.patch('/:id', authenticationHandler, answerController.updateAnswerByQuestionId);
  router.delete('/:id', authenticationHandler, answerController.deleteAnswerByQuestionId);

  return router;
};

export default configureAnswerRouter;
