
import { type Request, type Response } from 'express';
import { type IUserUsecase } from '../../../domain/usecase/user-usecase';
import { type IV1UserController } from '../interfaces/v1-user-controller-interface';

export class V1UserController implements IV1UserController {
  constructor (public usecase: IUserUsecase) {}

  createUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const payload = req.body;
      const user = await this.usecase.createUser(payload);
      console.log('🚀 ~ file: user.controller.ts:16 ~ V1UserController ~ user:', user);
      return res.status(200).send(user);
    } catch (e) {
      console.log(`🔥 There was an error: ${(e as Error).message}`);
      return res.status(500).send({ message: 'Internal error' });
    }
  };
};
