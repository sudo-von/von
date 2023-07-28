import {
  Router,
} from 'express';
import VideoController from './video-controller';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import AboutUsecase from '../../../../../domain/usecases/video-usecase/video-usecase';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';

const configureVideoRouter = (
  tokenService: TokenService,
  aboutUsecase: AboutUsecase,
  userRepository: IUserRepository,
) => {
  const videoController = new VideoController(aboutUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(
    tokenService,
    userRepository,
  );

  router.get('/:id', videoController.getVideoById);
  router.post('/username/:username', authenticationHandler, videoController.createVideoByUsername);
  router.patch('/:id', authenticationHandler, videoController.updateVideoById);

  return router;
};

export default configureVideoRouter;
