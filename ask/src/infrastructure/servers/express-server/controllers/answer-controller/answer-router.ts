import {
  Router,
  RequestHandler,
} from 'express';
import AnswerController from './answer-controller';
import AnswerUsecase from '../../../../../domain/usecases/answer-usecase/answer-usecase';

const configureAnswerRouter = (
  answerUsecase: AnswerUsecase,
  authenticationHandler: RequestHandler,
) => {
  const answerController = new AnswerController(answerUsecase);

  const router = Router();

  router.post('/question/:id', authenticationHandler, answerController.createAnswerByQuestionId);
  router.patch('/question/:id', authenticationHandler, answerController.updateAnswerByQuestionId);
  router.delete('/question/:id', authenticationHandler, answerController.deleteAnswerByQuestionId);

  return router;
};

export default configureAnswerRouter;
