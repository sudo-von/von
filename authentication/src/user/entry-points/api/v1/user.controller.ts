
import { type Request, type Response } from 'express';
import { type IUserUsecase } from '../../../domain/user-usecase';

interface IV1UserControllerWriter {
  createUser: (req: Request, res: Response) => Promise<Response>
}

interface IV1UserController extends IV1UserControllerWriter {
  usecase: IUserUsecase
}

export class V1UserController implements IV1UserController {
  constructor (public usecase: IUserUsecase) {}

  async createUser (req: Request, res: Response): Promise<Response> {
    const user = await this.usecase.createUser(req.body);
    return res.status(200).send(user);
  }
};
