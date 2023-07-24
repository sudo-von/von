import {
  Router,
} from 'express';
import ContentController from './content-controller';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import ContentUsecase from '../../../../../domain/usecases/content-usecase/content-usecase';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';

const configureContentRouter = (
  tokenService: TokenService,
  contentUsecase: ContentUsecase,
  userRepository: IUserRepository,
) => {
  const contentController = new ContentController(contentUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(
    tokenService,
    userRepository,
  );

  router.get('/username/:username', contentController.getContentsByUsername);
  router.get('/username/:username/type/:type', contentController.getContent);
  router.post('/username/:username', authenticationHandler, contentController.createContentByUsername);
  router.patch('/:id', authenticationHandler, contentController.updateContentById);

  return router;
};

export default configureContentRouter;
