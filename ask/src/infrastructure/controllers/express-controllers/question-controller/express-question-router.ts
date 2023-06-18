import express from 'express';
import jwtAuthHandler from '../middlewares/jwt-auth-handler';
import ExpressQuestionController from './express-question-controller';
import TokenService from '../../../services/token-service/token-service';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import validateRequestBodyHandler from '../middlewares/validate-request-body-handler';

const createQuestionRouter = (
  questionUsecase: QuestionUsecase,
  profileUsecase: ProfileUsecase,
  tokenService: TokenService,
) => {
  const questionController = new ExpressQuestionController(questionUsecase, profileUsecase);

  const router = express.Router();
  const authHandler = jwtAuthHandler(tokenService);

  router.get('/details/:id', questionController.getAnsweredQuestionById);
  router.get('/answered/:username', questionController.getAnsweredQuestionsByUser);
  router.get('/unanswered/:username', authHandler, questionController.getUnansweredQuestionsByUser);
  router.get('/all/:username', authHandler, validateRequestBodyHandler, questionController.getAllQuestionsByUser);
  router.post('/:username', validateRequestBodyHandler, questionController.createQuestion);

  return router;
};

export default createQuestionRouter;
