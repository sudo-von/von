import { Request, Response, NextFunction } from 'express';
import statusCodes from '../../status-codes';
import { CreateUserEntity } from '../../../../domain/entities/user-entity';
import { createUserDto } from '../../dtos/authentication-dtos/create-user-dto';
import { userCredentialsDto } from '../../dtos/authentication-dtos/user-credentials-dto';
import AuthenticationUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';

class ExpressAuthenticationController {
  constructor(
    private authenticationUsecase: AuthenticationUsecase,
    private createProfileProducer: RabbitMQCreateProfileProducer,
  ) {}

  authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = userCredentialsDto.parse(req.body);
      const token = await this.authenticationUsecase.authenticate(email, password);
      res.setHeader('Authorization', `Bearer ${token}`).sendStatus(statusCodes.success.ok);
    } catch (e) {
      next(e);
    }
  };

  signup = async (req: Request, res: Response, next: NextFunction) => {
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
      res.status(statusCodes.success.created).send({ result: user });
      await this.createProfileProducer.produceMessage('Profile:CreateProfile', user);
    } catch (e) {
      next(e);
    }
  };
}

export default ExpressAuthenticationController;
