import express from 'express';
import ExpressProfileController from './profile-controller';
import jwtAuthHandler from '../middlewares/jwt-auth-handler';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import TokenService from '../../../services/token-service/token-service';
import validateRequestBodyHandler from '../middlewares/validate-request-body-handler';

const createProfileRouter = (
  tokenService: TokenService,
  profileUsecase: ProfileUsecase,
) => {
  const controller = new ExpressProfileController(profileUsecase);

  const router = express.Router();

  const authHandler = jwtAuthHandler(tokenService);

  router.get('/username/:username', controller.getProfileByUsername);
  router.post('/username/:username', authHandler, validateRequestBodyHandler, controller.createProfile);
  router.patch('/username/:username', authHandler, validateRequestBodyHandler, controller.updateProfileByUsername);

  return router;
};

export default createProfileRouter;
