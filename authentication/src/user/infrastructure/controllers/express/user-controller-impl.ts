import { Request, Response } from 'express';
import { CreateUserEntity } from '../../../domain/entities/create-user-entity';
import AbstractUserController from '../user-controller';
import statusCodes from '../status-codes';
import {
  InternalServerRequestError,
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

type GetUserByIdRequest = (req: Request<{ id: string }>, res: Response) => Promise<Response>;
type SignupRequest = (req: Request<{}, {}, CreateUserEntity>, res: Response) => Promise<Response>;

class ExpressUserControllerImpl extends AbstractUserController {
  getUserById: GetUserByIdRequest = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userUsecase.getUserByUsername(id);
      return res.status(statusCodes.success.ok).send({ user });
    } catch (e) {
      throw new InternalServerRequestError();
    }
  };

  signup: SignupRequest = async (req, res) => {
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
      const createdUser = await this.userUsecase.createUser(userPayload);
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
