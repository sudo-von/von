import { Request, Response, NextFunction } from 'express';
import AuthController from '../auth-controller';
import statusCodes from '../status-codes';
import { createUserDto } from '../dtos/auth-dtos/create-user-dto';
import { userCredentialsDto } from '../dtos/auth-dtos/user-credentials-dto';

class ExpressAuthController extends AuthController {
  auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = userCredentialsDto.parse(req.body);
      const token = await this.authUsecase.authenticate(email, password);
      return res.status(statusCodes.success.ok).send({ token });
    } catch (e) {
      return next(e);
    }
  };

  refresh = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { refreshToken } = req.body;
      const token = await this.authUsecase.refresh(refreshToken);
      return res.status(statusCodes.success.ok).send({ result: token });
    } catch (e) {
      return next(e);
    }
  };

  signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = createUserDto.parse(req.body);
      console.log('🚀 ~ file: express-auth-controller.ts:35 ~ ExpressAuthController ~ signup= ~ payload:', payload);
      const user = await this.authUsecase.signup(payload);
      return res.status(statusCodes.success.created).send({ result: user });
    } catch (e) {
      return next(e);
    }
  };
}

export default ExpressAuthController;
