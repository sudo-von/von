import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import userToUserResponse from '../../../dtos/user/user-server-mappers';
import UserUsecase from '../../../../../domain/usecases/user-usecase/user-usecase';

class UserController {
  constructor(private readonly userUsecase: UserUsecase) {}

  getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const user = await this.userUsecase.getUserByUsername(username);

      const userResponse = userToUserResponse(user);

      return res.status(statusCode.OK).send({ result: userResponse });
    } catch (e) {
      return next(e);
    }
  };
}

export default UserController;
