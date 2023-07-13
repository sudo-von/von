import {
  Router,
} from 'express';
import UserController from './user-controller';
import UserUsecase from '../../../../../domain/usecases/user-usecase/user-usecase';

const configureUserRouter = (userUsecase: UserUsecase) => {
  const userController = new UserController(userUsecase);

  const router = Router();

  router.get('/:id', userController.getUserByUserId);

  return router;
};

export default configureUserRouter;
