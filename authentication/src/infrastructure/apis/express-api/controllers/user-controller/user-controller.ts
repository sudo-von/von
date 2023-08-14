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

  getUserByUsername: RequestHandler = async (req, res, next) => {
    try {
      const username = req.params.username.toLowerCase();

      const secureUser = await this.userUsecase.getUserByUsername(username);

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

      res.status(statusCodes.OK).send({ result: secureUserResponse });
    } catch (e) {
      next(e);
    }
  };

  updateUserByUsername: RequestHandler = async (req, res, next) => {
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

      const secureUserResponse = detailedSecureUserToResponse(secureUser);

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
