import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from 'http-status-codes';
import {
  UserPermissionDeniedServerError,
} from '../../../dtos/user-dto/user-server-errors';
import {
  UpdateUserRequest,
} from '../../../dtos/user-dto/user-server-request-dtos';
import {
  UpdateUserBroker,
} from '../../../../brokers/dtos/user-dto/user-broker-dtos';
import AMQPBroker from '../../../../brokers/amqp-broker/amqp-broker';
import UserUsecase from '../../../../../domain/usecases/user-usecase/user-usecase';
import secureUserToSecureUserResponse from '../../../dtos/user-dto/user-server-mappers';

class UserController {
  constructor(
    private readonly userUsecase: UserUsecase,
    private readonly updateUserProducer: AMQPBroker<UpdateUserBroker>,
  ) {}

  getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const secureUser = await this.userUsecase.getUserByUsername(username);

      const secureUserResponse = secureUserToSecureUserResponse(secureUser);

      res.status(statusCodes.OK).send({ result: secureUserResponse });
    } catch (e) {
      next(e);
    }
  };

  updateUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, user, params } = req;
      if (!user) throw UserPermissionDeniedServerError;

      const username = params.username.toLowerCase();

      const payload = UpdateUserRequest.parse(body);

      const secureUser = await this.userUsecase.updateUserByUsername(username, {
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
      });

      const secureUserResponse = secureUserToSecureUserResponse(secureUser);

      res.status(statusCodes.OK).send({ result: secureUserResponse });

      await this.updateUserProducer.produce('User:UpdateUser', {
        user_id: secureUser.id,
        username: secureUser.username,
      });
    } catch (e) {
      next(e);
    }
  };
}

export default UserController;
