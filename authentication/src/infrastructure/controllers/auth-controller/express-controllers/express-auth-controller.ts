import { Request, Response, NextFunction } from 'express';
import AuthController from '../auth-controller';
import { createUserDto } from '../../dtos/auth-dtos/create-user-dto';
import { userCredentialsDto } from '../../dtos/auth-dtos/user-credentials-dto';
import statusCodes from '../../status-codes';
import { MediumUserEntity } from '../../../../domain/entities/user-entity';

class ExpressAuthController extends AuthController {
  authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = userCredentialsDto.parse(req.body);
      const token = await this.authUsecase.authenticate(email, password);
      res.setHeader('Authorization', `Bearer ${token}`).sendStatus(statusCodes.success.ok);
    } catch (e) {
      next(e);
    }
  };

  signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = createUserDto.parse(req.body);
      const user = await this.authUsecase.signup(payload);
      res.status(statusCodes.success.created).send({ result: user });
      await this.messageBroker.produceMessage<MediumUserEntity>('Profile:CreateProfile', user);
    } catch (e) {
      next(e);
    }
  };
}

export default ExpressAuthController;
