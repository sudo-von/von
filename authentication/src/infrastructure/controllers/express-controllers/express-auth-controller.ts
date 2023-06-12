import { Request, Response, NextFunction } from 'express';
import { CreateUserEntity } from '../../../domain/entities/user-entity';
import AuthController from '../auth-controller';
import CreateUserDto from '../dtos/create-user-dto';
import RefreshTokenDto from '../dtos/refresh-token-dto';
import statusCodes from '../status-codes';
import { userCredentialsDto } from '../dtos/auth-dtos/user-credentials-dto';

class ExpressAuthController extends AuthController {
  auth = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { email, password } = userCredentialsDto.parse(req.body);
      const token = await this.authUsecase.authenticate(email, password);
      return res.status(statusCodes.success.ok).send({ token });
    } catch (e) {
      this.logger.log('warn', (e as Error).message);
      return next(e);
    }
  };

  refresh = async (
    req: Request<{}, {}, RefreshTokenDto>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { refreshToken } = req.body;
      const token = await this.authUsecase.refresh(refreshToken);
      return res.status(statusCodes.success.ok).send({ result: token });
    } catch (e) {
      this.logger.log('warn', (e as Error).message);
      return next(e);
    }
  };

  signup = async (
    req: Request<{}, {}, CreateUserDto>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const userPayload: CreateUserEntity = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        profile_picture: req.body.profile_picture,
        about: {
          position: req.body.about.position,
          interest: req.body.about.interest,
          quote: req.body.about.quote,
        },
      };
      const user = await this.authUsecase.signup(userPayload);
      return res.status(statusCodes.success.created).send({ user });
    } catch (e) {
      this.logger.log('warn', (e as Error).message);
      return next(e);
    }
  };
}

export default ExpressAuthController;
