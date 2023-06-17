import express from 'express';
import ProfileUsecase from '../../../../domain/usecases/profile-usecase';
import ExpressProfileController from './profile-controller';

const createProfileRouter = (profileUsecase: ProfileUsecase) => {
  const profileController = new ExpressProfileController(profileUsecase);

  const router = express.Router();
  router.get('/:username', profileController.getProfileWithMetricsByUsername);
  return router;
};

export default createProfileRouter;
