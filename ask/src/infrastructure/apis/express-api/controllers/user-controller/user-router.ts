import {
  Router,
} from 'express';
import UserController from './user-controller';
import validateIdMiddleware from '../../middlewares/validate-id-middleware';
import UserUsecase from '../../../../../domain/usecases/user-usecase/user-usecase';

const configureUserRouter = (userUsecase: UserUsecase) => {
  const userController = new UserController(userUsecase);

  const router = Router();

  router.get('/:id', validateIdMiddleware, userController.getUserByUserId);

  return router;
};

export default configureUserRouter;
