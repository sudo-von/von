import {
  Router,
} from 'express';
import SocialNetworkController from './social-network-controller';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';
import SocialNetworkUsecase from '../../../../../domain/usecases/social-newtork-usecase/social-newtork-usecase';

const configureSocialNetworkRouter = (
  tokenService: TokenService,
  userRepository: IUserRepository,
  socialNetworkUsecase: SocialNetworkUsecase,
) => {
  const socialNetworkController = new SocialNetworkController(socialNetworkUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(tokenService, userRepository);

  router.post('/username/:username', authenticationHandler, socialNetworkController.createSocialNetworkFileByUsername);
  router.patch('/:id', authenticationHandler, socialNetworkController.updateSocialNetworkFileById);

  return router;
};

export default configureSocialNetworkRouter;
