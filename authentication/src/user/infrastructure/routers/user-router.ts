import express from 'express';
import UserControllerImpl from '../controllers/user-controller-impl';
import { UserUsecase } from '../../domain/usecase/user-usecase';
import errorHandler from '../controllers/middlewares/error-handler';
import createUserValidator from '../controllers/validators/create-user-validator';
import validatorHandler from '../controllers/middlewares/validator-handler';

const createUserRouter = (userUsecase: UserUsecase) => {
  const userRouter = express.Router();

  const userControllerImpl = new UserControllerImpl(userUsecase);

  userRouter.get('/:id', userControllerImpl.getUserById);
  userRouter.post('/', createUserValidator, validatorHandler, userControllerImpl.createUser);
  userRouter.use(errorHandler);

  return userRouter;
};

export default createUserRouter;
