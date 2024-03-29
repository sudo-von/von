import {
  Router,
} from 'express';
import multer from 'multer';
import SocialNetworkController from './social-network-controller';
import TokenService from '../../../../services/token-service/token-service';
import validateIdMiddleware from '../../middlewares/validate-id-middleware';
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

  const fileHandler = multer().single('file');

  const authenticationHandler = authenticationMiddleware(tokenService, userRepository);

  const handlers = [authenticationHandler, fileHandler];

  router.post('/', handlers, socialNetworkController.createSocialNetwork);
  router.patch('/:id', validateIdMiddleware, handlers, socialNetworkController.updateSocialNetworkFileById);
  router.delete('/:id', validateIdMiddleware, handlers, socialNetworkController.deleteSocialNetworkById);

  return router;
};

export default configureSocialNetworkRouter;
