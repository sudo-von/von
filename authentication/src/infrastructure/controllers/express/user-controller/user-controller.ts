import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  updateUserControllerDto,
} from '../../dtos/controller-user-dto';
import statusCodes from '../../status-codes';
import {
  PermissionDeniedControllerError,
  InvalidFileParameterControllerError,
} from '../../errors/common-controller-error';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import restrictedUserEntityToRestrictedUserControllerDto from '../../mappers/controller-user-mappers';
import RabbitMQUpdateUserProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-update-user-producer';

class ExpressUserController {
  constructor(
    private userUsecase: UserUsecase,
    private updateUserProducer: RabbitMQUpdateUserProducer,
  ) {}

  getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const userFound = await this.userUsecase.getUserByUsername(username);

      const restrictedUser = restrictedUserEntityToRestrictedUserControllerDto(userFound);

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

      if (!user) throw PermissionDeniedControllerError;

      const username = params.username.toLowerCase();

      const payload = updateUserControllerDto.parse(body);

      const updatedUser = await this.userUsecase.updateUserByUsername(user.username, username, {
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
        profilePicture: {
          size: file.size,
          name: file.originalname,
          buffer: file.buffer,
          mimetype: file.mimetype,
        },
      });

      const restrictedUser = restrictedUserEntityToRestrictedUserControllerDto(updatedUser);

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
