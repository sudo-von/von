import {
  Router,
} from 'express';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';
import ContentUsecase from '../../../../../domain/usecases/content-usecase/content-usecase';
import ContentController from './content-controller';

const configureContentRouter = (
  tokenService: TokenService,
  contentUsecase: ContentUsecase,
  userRepository: IUserRepository,
) => {
  const contentController = new ContentController(contentUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(tokenService, userRepository);

  router.get('/:id', contentController.getContentById);
  router.get('/username/:username', contentController.getContentsByUsername);
  router.post('/username/:username', authenticationHandler, contentController.createVectorByUsername);
  router.patch('/:id', authenticationHandler, contentController.updateContentById);
  router.patch('/:id/media-type', authenticationHandler, contentController.updateContentMediaTypeById);

  return router;
};

export default configureContentRouter;
