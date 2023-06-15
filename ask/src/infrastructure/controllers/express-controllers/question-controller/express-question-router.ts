import express from 'express';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import ExpressQuestionController from './express-question-controller';
import validateRequestBodyHandler from '../middlewares/validate-request-body-handler';

const createQuestionRouter = (questionUsecase: QuestionUsecase) => {
  const questionController = new ExpressQuestionController(questionUsecase);

  const router = express.Router();
  router.post('/user/:username', validateRequestBodyHandler, questionController.createQuestion);
  return router;
};

export default createQuestionRouter;
