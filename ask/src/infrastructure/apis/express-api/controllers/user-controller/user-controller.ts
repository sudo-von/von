import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import UserUsecase from '../../../../../domain/usecases/user-usecase/user-usecase';
import userToDetailedUserResponse from '../../../entities/user-dto/user-server-mappers';

class UserController {
  constructor(private readonly userUsecase: UserUsecase) {}

  getUserByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const user = await this.userUsecase.getUserByUsername(id);

      const userResponse = userToDetailedUserResponse(user);

      return res.status(statusCode.OK).send({ result: userResponse });
    } catch (e) {
      return next(e);
    }
  };
}

export default UserController;
