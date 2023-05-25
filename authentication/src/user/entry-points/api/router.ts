import express, { type Router } from 'express';
import { V1UserController } from './v1/user.controller';
import { apiConfig } from '../../../common/config/api-config';
import { type IUserUsecase } from '../../domain/usecase/user-usecase';
import { validateCreateUserHandler } from './v1/validators/create-user-validator';
import { validateBodyHandler } from './middlewares/validate-request';

export const createUserController = (userUsecase: IUserUsecase): Router => {
  const router = express.Router();

  const controller = new V1UserController(userUsecase);

  /* 📡 Routes. */
  router.post(`${apiConfig.endpoints.v1}/signup`,
    validateCreateUserHandler,
    validateBodyHandler,
    controller.createUser
  );

  return router;
};
