import {
  Router,
} from 'express';
import UserController from './user-controller';
import UserUsecase from '../../../../../domain/usecases/user-usecase';

const configureUserRouter = (userUsecase: UserUsecase) => {
  const userController = new UserController(userUsecase);

  const router = Router();

  router.get('/username/:username', userController.getUserByUsername);

  return router;
};

export default configureUserRouter;
