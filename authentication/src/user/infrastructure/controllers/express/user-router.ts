import express from 'express';
import ExpressUserControllerImpl from './user-controller-impl';
import errorHandler from './middlewares/error-handler';
import { UserUsecase } from '../../../domain/usecase/user-usecase';

const createUserRouter = (userUsecase: UserUsecase) => {
  const userRouter = express.Router();

  const userControllerImpl = new ExpressUserControllerImpl(userUsecase);

  userRouter.get('/:id', userControllerImpl.getUserById);
  userRouter.post('/signup', userControllerImpl.signup);
  userRouter.use(errorHandler);

  return userRouter;
};

export default createUserRouter;
