import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  RestrictedControllerUserDto,
  UpdateControllerUserDto,
} from '../../dtos/controller-user-dto';
import statusCodes from '../../status-codes';
import {
  PERMISSION_DENIED_CONTROLLER,
} from '../../errors/common-controller-error';
import {
  UpdateUserEntity,
} from '../../../../domain/entities/user-entity';
import {
  MessageBrokerUpdateUserDto,
} from '../../../message-brokers/dtos/message-broker-user-dto';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import RabbitMQUpdateProfileProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-update-user-producer';

class ExpressUserController {
  constructor(
    private userUsecase: UserUsecase,
    private updateProfileProducer: RabbitMQUpdateProfileProducer,
  ) {}

  getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username } = req.params;

      const user = await this.userUsecase.getUserByUsername(username);

      const restrictedUserDto: RestrictedControllerUserDto = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profile_picture: user.profilePicture,
      };

      res.status(statusCodes.success.ok).send({ result: restrictedUserDto });
    } catch (e) {
      next(e);
    }
  };

  updateProfileByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params, user } = req;
      const { username } = params;

      if (!user) {
        return res.status(PERMISSION_DENIED_CONTROLLER.statusCode).send({
          message: PERMISSION_DENIED_CONTROLLER.message,
        });
      }

      const payload = UpdateControllerUserDto.parse(body);

      const updateUserEntity: UpdateUserEntity = {
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
        profilePicture: payload.profile_picture,
      };

      const updatedUser = await this.userUsecase.updateUserByUsername(
        user.username,
        username,
        updateUserEntity,
      );

      const restrictedControllerUserDto: RestrictedControllerUserDto = {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        username: updatedUser.username,
        profile_picture: updatedUser.profilePicture,
      };

      res.status(statusCodes.success.ok).send({ result: restrictedControllerUserDto });

      const updateProfileDto: MessageBrokerUpdateUserDto = {
        user_id: updatedUser.id,
        username: updatedUser.username,
      };

      return await this.updateProfileProducer.produceMessage('User:UpdateUser', updateProfileDto);
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressUserController;
