import express from 'express';
import ExpressProfileController from './profile-controller';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import TokenService from '../../../services/token-service/token-service';
import bodyMiddleware from '../middlewares/body-middleware';
import authenticationMiddleware from '../middlewares/authentication-middleware';

const createProfileRouter = (
  tokenService: TokenService,
  profileUsecase: ProfileUsecase,
) => {
  const controller = new ExpressProfileController(profileUsecase);

  const router = express.Router();

  const middlewares = [authenticationMiddleware(tokenService), bodyMiddleware];

  router.get('/username/:username', controller.getProfileByUsername);
  router.post('/username/:username', middlewares, controller.createProfile);
  router.patch('/username/:username', middlewares, controller.updateProfileByUsername);

  return router;
};

export default createProfileRouter;
