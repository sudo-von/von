import {
  Router,
} from 'express';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';
import VideoUsecase from '../../../../../domain/usecases/video-usecase/video-usecase';
import VideoController from './video-controller';

const configureVideoRouter = (
  tokenService: TokenService,
  videoUsecase: VideoUsecase,
  userRepository: IUserRepository,
) => {
  const videoController = new VideoController(videoUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(
    tokenService,
    userRepository,
  );

  router.post('/username/:username', authenticationHandler, videoController.createVideoContentByUsername);
  router.patch('/:id', authenticationHandler, videoController.updateVideoById);

  return router;
};

export default configureVideoRouter;
