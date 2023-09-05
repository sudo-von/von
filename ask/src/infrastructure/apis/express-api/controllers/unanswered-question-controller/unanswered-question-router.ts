import {
  Router,
} from 'express';
import TokenService from '../../../../services/token-service/token-service';
import UnansweredQuestionController from './unanswered-question-controller';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';
import UnansweredQuestionUsecase from '../../../../../domain/usecases/unanswered-question-usecase/unanswered-question-usecase';

const configureUnansweredQuestionRouter = (
  tokenService: TokenService,
  userRepository: IUserRepository,
  unansweredQuestionUsecase: UnansweredQuestionUsecase,
) => {
  const unansweredQuestionController = new UnansweredQuestionController(unansweredQuestionUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(
    tokenService,
    userRepository,
  );

  router.get('/:id', authenticationHandler, unansweredQuestionController.getUnansweredQuestionById);
  router.get('/username/:username', authenticationHandler, unansweredQuestionController.getUnansweredQuestionsByUsername);

  return router;
};

export default configureUnansweredQuestionRouter;
