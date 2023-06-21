import { Request, Response, NextFunction } from 'express';
import statusCodes from '../../status-codes';
import { RestrictedUserDto } from '../../dtos/user-dto';
import { createUserDto } from '../../dtos/create-user-dto';
import { userCredentialsDto } from '../../dtos/user-credentials-dto';
import { CreateUserEntity } from '../../../../domain/entities/user-entity';
import { CreateProfileDto } from '../../../message-brokers/dtos/profile-dto';
import AuthenticationUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';
import UserUsecase from '../../../../domain/usecases/user-usecase';
import RabbitMQUpdateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-update-profile-producer';

class ExpressUserController {
  constructor(
    private userUsecase: UserUsecase,
    private updateProfileProducer: RabbitMQUpdateProfileProducer,
  ) {}

  updateProfileById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = createUserDto.parse(req.body);

      const createUserEntity: CreateUserEntity = {
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

      const user = await this.authenticationUsecase.signup(createUserEntity);

      const restrictedUserDto: RestrictedUserDto = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profile_picture: user.profilePicture,
        about: {
          quote: user.about.quote,
          interest: user.about.interest,
          position: user.about.position,
        },
      };

      res.status(statusCodes.success.created).send({ result: restrictedUserDto });

      const createProfileDto: CreateProfileDto = {
        name: user.name,
        user_id: user.id,
        username: user.username,
        profile_picture: user.profilePicture,
        about: {
          quote: user.about.quote,
          interest: user.about.interest,
          position: user.about.position,
        },
      };

      await this.createProfileProducer.produceMessage('Profile:CreateProfile', createProfileDto);
    } catch (e) {
      next(e);
    }
  };
}

export default ExpressUserController;
