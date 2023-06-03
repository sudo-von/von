import express, { Request, Response, Router } from 'express';
import { CreateUserEntity } from '../../domain/entities/create-user-entity';
import AbstractUserController from './user-controller';

class UserControllerImpl extends AbstractUserController {
  private router: Router = express.Router();

  init() {
    this.router.get('/:id', this.getUserById);
    this.router.post('/', this.createUser);
  }

  getUserById = async (req: Request<{ id?: string }>, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).send({ message: 'missing param id' });
      const user = await this.userUsecase.getUserById(id);
      return res.status(200).send({ user });
    } catch (e) {
      if (e instanceof Error) return res.status(500).send({ message: e.message });
      return res.status(500).send({ message: 'something went wrong' });
    }
  };

  createUser = async (req: Request<object, object, CreateUserEntity>, res: Response) => {
    try {
      const payload = req.body;
      const createdUser = await this.userUsecase.createUser(payload);
      return res.status(201).send({ createdUser });
    } catch (e) {
      if (e instanceof Error) return res.status(500).send({ message: e.message });
      return res.status(500).send({ message: 'something went wrong' });
    }
  };
}

export default UserControllerImpl;
