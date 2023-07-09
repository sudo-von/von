import {
  Router,
  RequestHandler,
} from 'express';
import UnansweredQuestionController from './unanswered-question-controller';
import UnansweredQuestionUsecase from '../../../../../domain/usecases/unanswered-question-usecase/unanswered-question-usecase';

const configureUnansweredQuestionRouter = (
  authenticationHandler: RequestHandler,
  unansweredQuestionUsecase: UnansweredQuestionUsecase,
) => {
  const unansweredQuestionController = new UnansweredQuestionController(unansweredQuestionUsecase);

  const router = Router();

  router.get('/username/:username', authenticationHandler, unansweredQuestionController.getUnansweredQuestionsByUsername);

  return router;
};

export default configureUnansweredQuestionRouter;
