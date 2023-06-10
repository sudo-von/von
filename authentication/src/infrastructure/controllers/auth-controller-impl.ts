import { NextFunction, Request, Response } from 'express';
import statusCodes from './status-codes';
import UserCredentialsDTO from './dtos/user-credentials-dto';
import CreateUserDto from './dtos/create-user-dto';
import AuthController from './auth-controller';
import { CreateUserEntity } from '../../domain/entities/user-entity';

class AuthControllerImpl extends AuthController {
  auth = async (
    req: Request<{}, {}, UserCredentialsDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { email, password } = req.body;
      const token = await this.authUsecase.authenticate(email, password);
      return res.status(statusCodes.success.ok).send({ token });
    } catch (e) {
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
      return next(e);
    }
  };
}

export default AuthControllerImpl;
