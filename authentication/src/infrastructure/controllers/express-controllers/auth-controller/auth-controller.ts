import { Request, Response, NextFunction } from 'express';
import statusCodes from '../../status-codes';
import { createUserDto } from '../../dtos/auth-dtos/create-user-dto';
import { userCredentialsDto } from '../../dtos/auth-dtos/user-credentials-dto';
import AuthenticationUsecase from '../../../../domain/usecases/authentication-usecase';
import RabbitMQCreateProfileProducer from '../../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';

class ExpressAuthController {
  constructor(
    private authenticationUsecase: AuthenticationUsecase,
    private messageBroker: RabbitMQCreateProfileProducer,
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
      const user = await this.authenticationUsecase.signup(payload);
      res.status(statusCodes.success.created).send({ result: user });
      await this.messageBroker.produceMessage('Profile:CreateProfile', user);
    } catch (e) {
      next(e);
    }
  };
}

export default ExpressAuthController;
