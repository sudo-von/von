import express from 'express';
import bodyMiddleware from '../middlewares/body-middleware';
import ExpressProfileController from './profile-controller';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import TokenService from '../../../services/token-service/token-service';
import authenticationMiddleware from '../middlewares/authentication-middleware';
import IUserRepository from '../../../../domain/repositories/user-repository';

const configureProfileRouter = (
  tokenService: TokenService,
  profileUsecase: ProfileUsecase,
  userRepository: IUserRepository,
) => {
  const controller = new ExpressProfileController(profileUsecase);

  const router = express.Router();

  const middlewares = [authenticationMiddleware(tokenService, userRepository), bodyMiddleware];

  router.get('/username/:username', controller.getProfileByUsername);
  router.post('/username/:username', middlewares, controller.createProfile);
  router.patch('/username/:username', middlewares, controller.updateProfileByUsername);

  console.log('🔌 Profile router has been configured.');

  return router;
};

export default configureProfileRouter;
