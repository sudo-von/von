import { Request, Response, NextFunction } from 'express';
import statusCodes from '../../status-codes';
import { RestrictedUserDto } from '../../dtos/user-dto';
import { updateUserDto } from '../../dtos/update-user-dto';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import { PERMISSION_DENIED_REQUEST } from '../../errors/request-errors';
import { UpdateUserEntity } from '../../../../domain/entities/user-entity';
import { UpdateProfileDto } from '../../../message-brokers/dtos/profile-dto';
import RabbitMQUpdateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-update-profile-producer';

class ExpressUserController {
  constructor(
    private userUsecase: UserUsecase,
    private updateProfileProducer: RabbitMQUpdateProfileProducer,
  ) {}

  updateProfileById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params, user } = req;
      const { id } = params;

      if (!user) {
        return res.status(PERMISSION_DENIED_REQUEST.statusCode).send({
          message: PERMISSION_DENIED_REQUEST.message,
        });
      }

      const payload = updateUserDto.parse(body);

      const updateUserEntity: UpdateUserEntity = {
        name: payload.name,
        email: payload.email,
        username: payload.username,
        password: payload.password,
        profilePicture: payload.profile_picture,
        about: {
          interest: payload.about.interest,
          position: payload.about.position,
          quote: payload.about.quote,
        },
      };

      const updatedUser = await this.userUsecase.updateUserById(user.id, id, updateUserEntity);

      const restrictedUserDto: RestrictedUserDto = {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        username: updatedUser.username,
        profile_picture: updatedUser.profilePicture,
        about: {
          quote: updatedUser.about.quote,
          interest: updatedUser.about.interest,
          position: updatedUser.about.position,
        },
      };

      res.status(statusCodes.success.created).send({ result: restrictedUserDto });

      const updateProfileDto: UpdateProfileDto = {
        name: updatedUser.name,
        user_id: updatedUser.id,
        username: updatedUser.username,
        profile_picture: updatedUser.profilePicture,
        about: {
          quote: updatedUser.about.quote,
          interest: updatedUser.about.interest,
          position: updatedUser.about.position,
        },
      };

      return await this.updateProfileProducer.produceMessage('Profile:UpdateProfile', updateProfileDto);
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressUserController;
