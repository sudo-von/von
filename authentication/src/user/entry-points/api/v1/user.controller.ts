
import { type NextFunction, type Request, type Response } from 'express';
import { type IUserUsecase } from '../../../domain/usecase/user-usecase';
import { type IV1UserController } from '../interfaces/v1-user-controller-interface';

export class V1UserController implements IV1UserController {
  constructor (public usecase: IUserUsecase) {}

  createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const payload = req.body;
      const user = await this.usecase.createUser(payload);
      res.status(200).send(user);
    } catch (e) {
      console.log('asdhdasjhasdjhasd');
      next(e);
    }
  };
};
