import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from '../../status-codes';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import userToUserController from '../../dtos/user/user-controller-mappers';

class UserController {
  constructor(private readonly userUsecase: UserUsecase) {}

  getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const userFoundByUsername = await this.userUsecase.getUserByUsername(username);

      const userController = userToUserController(userFoundByUsername);

      return res.status(statusCodes.success.ok).send({ result: userController });
    } catch (e) {
      return next(e);
    }
  };
}

export default UserController;
