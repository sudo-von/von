import {
  Router,
} from 'express';
import AnswerController from './answer-controller';
import TokenService from '../../../../services/token-service/token-service';
import validateIdMiddleware from '../../middlewares/validate-id-middleware';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import AnswerUsecase from '../../../../../domain/usecases/answer-usecase/answer-usecase';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';

const configureAnswerRouter = (
  tokenService: TokenService,
  answerUsecase: AnswerUsecase,
  userRepository: IUserRepository,
) => {
  const answerController = new AnswerController(answerUsecase);

  const router = Router();

  const handlers = [authenticationMiddleware(tokenService, userRepository), validateIdMiddleware];

  router.post('/question/:id', handlers, answerController.createAnswerByQuestionId);
  router.patch('/question/:id', handlers, answerController.updateAnswerByQuestionId);
  router.delete('/question/:id', handlers, answerController.deleteAnswerByQuestionId);

  return router;
};

export default configureAnswerRouter;
