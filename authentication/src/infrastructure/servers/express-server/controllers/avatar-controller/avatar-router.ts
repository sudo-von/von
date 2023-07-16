import {
  Router,
} from 'express';
import multer from 'multer';
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

  const uploadHandler = multer();

  const authenticationHandler = authenticationMiddleware(tokenService, userRepository);

  const handlers = [uploadHandler.single('avatar'), authenticationHandler];

  router.post('/user/:id', handlers, avatarController.createAvatarFileByUserId);

  router.patch('/user/:id', handlers, avatarController.updateAvatarFileByUserId);

  return router;
};

export default configureAvatarRouter;
