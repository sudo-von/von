import { type Request, type Response } from 'express';
import { type IUserUsecase } from '../../../domain/usecase/user-usecase';

interface IV1UserControllerWriter {
  createUser: (req: Request, res: Response) => Promise<Response>
}

export interface IV1UserController extends IV1UserControllerWriter {
  usecase: IUserUsecase
}
