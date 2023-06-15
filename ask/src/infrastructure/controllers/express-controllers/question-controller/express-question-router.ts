import express from 'express';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import ExpressQuestionController from './express-question-controller';
import validateRequestBodyHandler from '../middlewares/validate-request-body-handler';
import jwtAuthHandler from '../middlewares/jwt-auth-handler';
import TokenService from '../../../services/token-service/token-service';

const createQuestionRouter = (
  questionUsecase: QuestionUsecase,
  tokenService: TokenService,
) => {
  const questionController = new ExpressQuestionController(questionUsecase);

  const router = express.Router();
  const authHandler = jwtAuthHandler(tokenService);
  router.get('/details/:id', questionController.getAnsweredQuestionById);
  router.get('/all/:username', authHandler, validateRequestBodyHandler, questionController.getAllQuestionsByUser);
  router.get('/answered/:username', questionController.getAnsweredQuestionsByUser);
  router.get('/unanswered/:username', authHandler, questionController.getUnansweredQuestionsByUser);
  router.post('/:username', validateRequestBodyHandler, questionController.createQuestion);
  return router;
};

export default createQuestionRouter;
