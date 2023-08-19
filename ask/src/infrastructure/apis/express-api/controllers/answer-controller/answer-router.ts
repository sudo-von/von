import {
  Router,
} from 'express';
import AnswerController from './answer-controller';
import TokenService from '../../../../services/token-service/token-service';
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

  const authenticationHandler = authenticationMiddleware(
    tokenService,
    userRepository,
  );

  router.post('/question/:id', authenticationHandler, answerController.createAnswerByQuestionId);
  router.patch('/question/:id', authenticationHandler, answerController.updateAnswerByQuestionId);
  router.delete('/question/:id', authenticationHandler, answerController.deleteAnswerByQuestionId);

  return router;
};

export default configureAnswerRouter;
