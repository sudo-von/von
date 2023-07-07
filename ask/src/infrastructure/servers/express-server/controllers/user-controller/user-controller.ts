import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from '../../../constants/status-codes';
import UserUsecase from '../../../../../domain/usecases/user-usecase';
import userToUserServer from '../../../dtos/user/user-server-mappers';

class UserController {
  constructor(private readonly userUsecase: UserUsecase) {}

  getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const userFoundByUsername = await this.userUsecase.getUserByUsername(username);

      const userController = userToUserServer(userFoundByUsername);

      return res.status(statusCodes.success.ok).send({ result: userController });
    } catch (e) {
      return next(e);
    }
  };
}

export default UserController;
