import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';
import UserUsecase from '../../../../../domain/usecases/user-usecase/user-usecase';
import detailedUserToResponse from '../../../entities/domain-entities/user-entity/user-mappers';

class UserController {
  constructor(private readonly userUsecase: UserUsecase) {}

  getUserByUserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id.toLowerCase();

      const user = await this.userUsecase.getUserByUsername(id);

      const userResponse = detailedUserToResponse(user);

      return res.status(statusCode.OK).send({ result: userResponse });
    } catch (e) {
      return next(e);
    }
  };
}

export default UserController;
