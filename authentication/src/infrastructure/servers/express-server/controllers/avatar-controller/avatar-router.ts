import {
  Router,
} from 'express';
import AvatarController from './avatar-controller';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import AvatarUsecase from '../../../../../domain/usecases/avatar-usecase/avatar-usecase';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';

const configureAvatarRouter = (
  tokenService: TokenService,
  avatarUsecase: AvatarUsecase,
  userRepository: IUserRepository,
) => {
  const avatarController = new AvatarController(avatarUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(tokenService, userRepository);

  router.get('/user/:id', authenticationHandler, avatarController.createAvatarFileByUserId);
  router.patch('/user/:id', authenticationHandler, avatarController.updateAvatarFileByUserId);

  return router;
};

export default configureAvatarRouter;
