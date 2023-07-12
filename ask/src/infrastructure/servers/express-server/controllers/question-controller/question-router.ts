import {
  Router,
  RequestHandler,
} from 'express';
import QuestionController from './question-controller';
import QuestionUsecase from '../../../../../domain/usecases/question-usecase/question-usecase';

const configureQuestionRouter = (
  questionUsecase: QuestionUsecase,
  authenticationHandler: RequestHandler,
) => {
  const questionController = new QuestionController(questionUsecase);

  const router = Router();

  router.delete('/:id', authenticationHandler, questionController.deleteQuestionById);
  router.post('/username/:username', questionController.createQuestionByUsername);
  router.get('/username/:username', authenticationHandler, questionController.getQuestionsByUsername);

  return router;
};

export default configureQuestionRouter;
