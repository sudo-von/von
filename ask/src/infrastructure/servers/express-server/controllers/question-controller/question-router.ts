import {
  Router,
} from 'express';
import QuestionController from './question-controller';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import QuestionUsecase from '../../../../../domain/usecases/question-usecase/question-usecase';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';

const configureQuestionRouter = (
  tokenService: TokenService,
  userRepository: IUserRepository,
  questionUsecase: QuestionUsecase,
) => {
  const questionController = new QuestionController(questionUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(
    tokenService,
    userRepository,
  );

  router.get('/username/:username', authenticationHandler, questionController.getQuestionsByUsername);
  router.post('/username/:username', questionController.createQuestionByUsername);
  router.delete('/:id', authenticationHandler, questionController.deleteQuestionById);

  return router;
};

export default configureQuestionRouter;
