import express from 'express';
import UserControllerImpl from '../controllers/user-controller-impl';
import { UserUsecase } from '../../domain/usecase/user-usecase';
import errorHandler from '../controllers/middlewares/error-handler';

const createUserRouter = (userUsecase: UserUsecase) => {
  const userRouter = express.Router();

  const userControllerImpl = new UserControllerImpl(userUsecase);

  userRouter.get('/:id', userControllerImpl.getUserById);
  userRouter.post('/', userControllerImpl.createUser);
  userRouter.use(errorHandler);

  return userRouter;
};

export default createUserRouter;
