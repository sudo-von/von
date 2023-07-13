import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import userToUserResponse from '../../../dtos/user-dto/user-server-mappers';
import UserUsecase from '../../../../../domain/usecases/user-usecase/user-usecase';

class UserController {
  constructor(private readonly userUsecase: UserUsecase) {}

  getUserByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const user = await this.userUsecase.getUserByUserId(username);

      const userResponse = userToUserResponse(user);

      return res.status(statusCode.OK).send({ result: userResponse });
    } catch (e) {
      return next(e);
    }
  };
}

export default UserController;
