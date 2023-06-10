import { Request, Response } from 'express';
import { CreateUserEntity } from '../../../domain/entities/create-user-entity';
import AbstractUserController from '../user-controller';
import statusCodes from '../status-codes';
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
} from '../errors';
import { ErrorName } from '../../../domain/errors';
import { UserCredentials } from '../entities/user-credentials';

type LoginHandler = (req: Request<{}, {}, UserCredentials>, res: Response) => Promise<Response>;
type SignupHandler = (req: Request<{}, {}, CreateUserEntity>, res: Response) => Promise<Response>;

class ExpressUserControllerImpl extends AbstractUserController {
  login: LoginHandler = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await this.userUsecase.authenticate(email, password);
      return res.status(statusCodes.success.ok).send({ user });
    } catch (e) {
      const message = (e as Error).name as ErrorName;
      if (message === 'InvalidCredentialsError') throw new InvalidCredentialsRequestError();
      throw new InternalServerRequestError();
    }
  };

  signup: SignupHandler = async (req, res) => {
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
      const createdUser = await this.userUsecase.signup(userPayload);
      return res.status(statusCodes.success.created).send({ createdUser });
    } catch (e) {
      const message = (e as Error).name as ErrorName;
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

export default ExpressUserControllerImpl;
