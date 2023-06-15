import express from 'express';
import ExpressAnswerController from './express-answer-controller';
import AnswerUsecase from '../../../../domain/usecases/answer-usecase';

const createAnswerRouter = (answerUsecase: AnswerUsecase) => {
  const questionController = new ExpressAnswerController(answerUsecase);

  const router = express.Router();
  router.get('/user/:username', questionController.getAnswersByUsername);
  return router;
};

export default createAnswerRouter;
