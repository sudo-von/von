import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  UpdateUserControllerDto,
  RestrictedUserControllerDto,
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
import RabbitMQUpdateUserProducer from '../../../message-brokers/rabbitmq/producers/rabbitmq-update-user-producer';

class ExpressUserController {
  constructor(
    private userUsecase: UserUsecase,
    private updateUserProducer: RabbitMQUpdateUserProducer,
  ) {}

  getUserByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const username = req.params.username.toLowerCase();

      const restrictedUser = await this.userUsecase.getUserByUsername(username);

      const restrictedUserControllerDto: RestrictedUserControllerDto = {
        id: restrictedUser.id,
        name: restrictedUser.name,
        email: restrictedUser.email,
        username: restrictedUser.username,
        profile_picture: restrictedUser.profilePicture,
      };

      return res.status(statusCodes.success.ok).send({ result: restrictedUserControllerDto });
    } catch (e) {
      return next(e);
    }
  };

  updateProfileByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params, user } = req;

      const username = params.username.toLowerCase();

      if (!user) {
        return res.status(PERMISSION_DENIED_CONTROLLER.statusCode).send({
          message: PERMISSION_DENIED_CONTROLLER.message,
        });
      }

      const payload = UpdateUserControllerDto.parse(body);

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

      const restrictedUserControllerDto: RestrictedUserControllerDto = {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        username: updatedUser.username,
        profile_picture: updatedUser.profilePicture,
      };

      res.status(statusCodes.success.ok).send({ result: restrictedUserControllerDto });

      const updateProfileDto: MessageBrokerUpdateUserDto = {
        user_id: updatedUser.id,
        username: updatedUser.username,
      };

      return await this.updateUserProducer.produceMessage('User:UpdateUser', updateProfileDto);
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressUserController;
