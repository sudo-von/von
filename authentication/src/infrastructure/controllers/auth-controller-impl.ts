import { Request, Response } from 'express';
import { CreateUserEntity } from '../../domain/entities/create-user-entity';
import statusCodes from './status-codes';
import {
  InternalServerRequestError,
  InvalidCredentialsRequestError,
  InvalidInterestRequestError,
  InvalidNameRequestError,
  InvalidPasswordRequestError,
  InvalidPositionRequestError,
  InvalidQuoteRequestError,
  InvalidUsernameRequestError,
  SingleUserOnlyRequestError,
  UserCouldntBeCreatedRequestError,
} from './errors/request-error-factories';
import UserCredentialsDTO from './dtos/user-credentials-dto';
import CreateUserDto from './dtos/create-user-dto';
import AuthController from './auth-controller';
import { ErrorNames } from '../../domain/errors/errors';

class AuthControllerImpl extends AuthController {
  auth = async (
    req: Request<{}, {}, UserCredentialsDTO>,
    res: Response,
  ): Promise<Response> => {
    try {
      const { email, password } = req.body;
      const user = await this.authUsecase.authenticate(email, password);
      return res.status(statusCodes.success.ok).send({ user });
    } catch (e) {
      const message = (e as Error).name as ErrorNames;
      if (message === 'InvalidCredentialsError') throw new InvalidCredentialsRequestError();
      throw new InternalServerRequestError();
    }
  };

  signup = async (
    req: Request<{}, {}, CreateUserDto>,
    res: Response,
  ): Promise<Response> => {
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
      const createdUser = await this.authUsecase.signup(userPayload);
      return res.status(statusCodes.success.created).send({ createdUser });
    } catch (e) {
      const message = (e as Error).name as ErrorNames;
      if (message === 'InvalidNameError') throw new InvalidNameRequestError();
      if (message === 'InvalidUsernameError') throw new InvalidUsernameRequestError();
      if (message === 'InvalidPasswordError') throw new InvalidPasswordRequestError();
      if (message === 'InvalidPositionError') throw new InvalidPositionRequestError();
      if (message === 'InvalidInterestError') throw new InvalidInterestRequestError();
      if (message === 'InvalidQuoteError') throw new InvalidQuoteRequestError();
      if (message === 'SingleUserOnlyError') throw new SingleUserOnlyRequestError();
      if (message === 'UserCouldntBeCreatedError') throw new UserCouldntBeCreatedRequestError();
      throw new InternalServerRequestError();
    }
  };
}

export default AuthControllerImpl;
