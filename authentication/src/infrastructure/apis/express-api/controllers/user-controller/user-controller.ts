import {
  RequestHandler,
} from 'express';
import statusCodes from 'http-status-codes';
import {
  UserPermissionDeniedServerError,
} from '../../../entities/domain-entities/user-entity/user-errors';
import AMQPBroker from '../../../../brokers/amqp-broker/amqp-broker';
import {
  UpdateUserBroker,
} from '../../../../brokers/entities/user-entity/user-broker-entities';
import {
  UpdateUserRequest,
} from '../../../entities/domain-entities/user-entity/user-request-entities';
import UserUsecase from '../../../../../domain/usecases/user-usecase/user-usecase';
import detailedSecureUserToResponse from '../../../entities/domain-entities/user-entity/user-mappers';

class UserController {
  constructor(
    private readonly userUsecase: UserUsecase,
    private readonly updateUserProducer: AMQPBroker<UpdateUserBroker>,
  ) {}

  getUser: RequestHandler = async (req, res, next) => {
    try {
      const secureUser = await this.userUsecase.getUser();

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.OK).send({ result: secureUserResponse });
    } catch (e) {
      next(e);
    }
  };

  updateUser: RequestHandler = async (req, res, next) => {
    try {
      const { body, user } = req;

      if (!user) throw UserPermissionDeniedServerError;

      const payload = UpdateUserRequest.parse(body);

      const secureUser = await this.userUsecase.updateUser({
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
      });

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.OK).send({ result: secureUserResponse });

      await this.updateUserProducer.produce('Authentication:UpdateUser', {
        user_id: secureUser.id,
        username: secureUser.username,
      });
    } catch (e) {
      next(e);
    }
  };
}

export default UserController;
