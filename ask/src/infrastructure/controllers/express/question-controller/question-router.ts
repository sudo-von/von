import express from 'express';
import QuestionController from './question-controller';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import TokenService from '../../../services/token-service/token-service';
import QuestionUsecase from '../../../../domain/usecases/question-usecase';
import LoggerService from '../../../services/logger-service/logger-service';
import IUserRepository from '../../../../domain/repositories/user-repository';
import authenticationMiddleware from '../middlewares/authentication-middleware';

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

  router.get('/answered/:id', questionController.getAnsweredQuestionById);
  router.post('/username/:username', questionController.createQuestionByUsername);
  router.get('/username/:username', authenticationHandler, questionController.getQuestionsByUsername);
  router.get('/answered/:username', questionController.getAnsweredQuestionsByUsername);
  router.get('/unanswered/:username', authenticationHandler, questionController.getUnansweredQuestionsByUsername);
  router.post('/answer/:id', authenticationHandler, questionController.createAnswerByQuestionId);
  router.patch('/answer/:id', authenticationHandler, questionController.updateAnswerByQuestionId);

  return router;
};

export default configureQuestionRouter;
