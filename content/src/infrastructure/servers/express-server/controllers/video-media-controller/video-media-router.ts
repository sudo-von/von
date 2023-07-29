import {
  Router,
} from 'express';
import VideoMediaController from './video-media-controller';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';
import AboutUsecase from '../../../../../domain/usecases/video-media-usecase/video-media-usecase';

const configureVideoMediaRouter = (
  tokenService: TokenService,
  aboutUsecase: AboutUsecase,
  userRepository: IUserRepository,
) => {
  const videoMediaController = new VideoMediaController(aboutUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(
    tokenService,
    userRepository,
  );

  router.patch('/:id', authenticationHandler, videoMediaController.setVideoMediaByContentId);

  return router;
};

export default configureVideoMediaRouter;
