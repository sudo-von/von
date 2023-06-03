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

class UserControllerImpl extends AbstractUserController {
  getUserById = async (req: Request<{ id?: string }>, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).send({ message: 'missing param id' });
      const user = await this.userUsecase.getUserById(id);
      return res.status(200).send({ user });
    } catch (e) {
      if (e instanceof UserNotFoundError) throw new UserNotFoundRequestError();
      throw new InternalRequestError();
    }
  };

  createUser = async (req: Request<object, object, CreateUserEntity>, res: Response) => {
    try {
      const payload = req.body;
      const createdUser = await this.userUsecase.createUser(payload);
      return res.status(201).send({ createdUser });
    } catch (e) {
      if (e instanceof EmailAlreadyExists) throw new EmailAlreadyExistsRequestError();
      if (e instanceof UserCouldntBeCreated) throw new UserCouldntBeCreatedRequestError();
      throw new InternalRequestError();
    }
  };
}

export default UserControllerImpl;
