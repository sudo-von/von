import express from 'express';
import QuestionController from './question-controller';
import UserUsecase from '../../../../../domain/usecases/user-usecase';
import TokenService from '../../../../services/token-service/token-service';
import QuestionUsecase from '../../../../../domain/usecases/question-usecase';
import LoggerService from '../../../../services/logger-service/logger-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import IUserRepository from '../../../../../domain/repositories/user/user-repository';

const configureQuestionRouter = (
  userUsecase: UserUsecase,
  tokenService: TokenService,
  loggerService: LoggerService,
  userRepository: IUserRepository,
  questionUsecase: QuestionUsecase,
) => {
  const questionController = new QuestionController(userUsecase, questionUsecase);

  const router = express.Router();

  const authenticationHandler = authenticationMiddleware(
    tokenService,
    loggerService,
    userRepository,
  );

  router.get('/username/:username', authenticationHandler, questionController.getQuestionsByUsername);
  router.get('/answered/:id', questionController.getAnsweredQuestionById);
  router.get('/answered/username/:username', questionController.getAnsweredQuestionsByUsername);
  router.get('/unanswered/username/:username', authenticationHandler, questionController.getUnansweredQuestionsByUsername);
  router.post('/username/:username', questionController.createQuestionByUsername);
  router.post('/:id/answer', authenticationHandler, questionController.createAnswerByQuestionId);
  router.patch('/:id/answer', authenticationHandler, questionController.updateAnswerByQuestionId);
  router.delete('/:id/answer', authenticationHandler, questionController.deleteAnswerByQuestionId);
  router.delete('/:id', authenticationHandler, questionController.deleteQuestionById);

  return router;
};

export default configureQuestionRouter;
