import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  updateUserController,
} from '../../dtos/user-controller-dtos';
import statusCodes from '../../status-codes';
import {
  UserPermissionDeniedControllerError,
} from '../../errors/user-controller-errors';
import {
  InvalidFileParameterControllerError,
} from '../../errors/request-controller-errors';
import UserUsecase from '../../../../domain/usecases/user-usecase/user-usecase';
import restrictedUserToRestrictedUserController from '../../mappers/user-controller-mappers';
import RabbitMQUpdateUserProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-update-user-producer';

class ExpressUserController {
  constructor(
    private userUsecase: UserUsecase,
    private updateUserProducer: RabbitMQUpdateUserProducer,
  ) {}

  getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const userFoundByUsername = await this.userUsecase.getUserByUsername(username);

      const restrictedUser = restrictedUserToRestrictedUserController(userFoundByUsername);

      return res.status(statusCodes.success.ok).send({ result: restrictedUser });
    } catch (e) {
      return next(e);
    }
  };

  updateProfileByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        body, params, user, file,
      } = req;

      if (!file) throw InvalidFileParameterControllerError;

      if (!user) throw UserPermissionDeniedControllerError;

      const username = params.username.toLowerCase();

      const payload = updateUserController.parse(body);

      const updatedUser = await this.userUsecase.updateUserByUsername(username, {
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
        profilePictureFile: {
          size: file.size,
          name: file.originalname,
          buffer: file.buffer,
          mimetype: file.mimetype,
        },
      });

      const restrictedUser = restrictedUserToRestrictedUserController(updatedUser);

      res.status(statusCodes.success.ok).send({ result: restrictedUser });

      return await this.updateUserProducer.produceMessage('User:UpdateUser', {
        user_id: restrictedUser.id,
        username: restrictedUser.username,
      });
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressUserController;
