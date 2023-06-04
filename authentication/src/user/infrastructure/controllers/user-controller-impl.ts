import { Request, Response } from 'express';
import { CreateUserEntity } from '../../domain/entities/create-user-entity';
import AbstractUserController from './user-controller';
import UserNotFoundError from '../../domain/errors/UserNotFoundError';
import UserNotFoundRequestError from './errors/UserNotFoundError';
import InternalRequestError from './errors/InternalRequestError';
import EmailAlreadyExistsRequestError from './errors/EmailAlreadyExistsRequestError';
import EmailAlreadyExists from '../../domain/errors/EmailAlreadyExists';
import UserCouldntBeCreated from '../../domain/errors/UserCouldntBeCreated';
import UserCouldntBeCreatedRequestError from './errors/UserCouldntBeCreatedRequestError';
import statusCodes from './errors/status-codes';

type GetUserByIdRequest = Request<{ id: string }>;
type CreateUserRequest = Request<{}, {}, CreateUserEntity>;

class UserControllerImpl extends AbstractUserController {
  getUserById = async (req: GetUserByIdRequest, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.userUsecase.getUserById(id);
      return res.status(statusCodes.success.ok).send({ user });
    } catch (e) {
      if (e instanceof UserNotFoundError) throw new UserNotFoundRequestError();
      throw new InternalRequestError();
    }
  };

  createUser = async (req: CreateUserRequest, res: Response) => {
    try {
      const payload = req.body;
      const createdUser = await this.userUsecase.createUser(payload);
      return res.status(statusCodes.success.created).send({ createdUser });
    } catch (e) {
      if (e instanceof EmailAlreadyExists) throw new EmailAlreadyExistsRequestError();
      if (e instanceof UserCouldntBeCreated) throw new UserCouldntBeCreatedRequestError();
      throw new InternalRequestError();
    }
  };
}

export default UserControllerImpl;
