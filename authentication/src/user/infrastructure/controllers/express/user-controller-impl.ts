import { Request, Response } from 'express';
import { CreateUserEntity } from '../../../domain/entities/create-user-entity';
import AbstractUserController from '../user-controller';
import statusCodes from '../errors/status-codes';
import InternalRequestError from '../errors/internal-request-error';
import InternalRequest from '../errors/internal-request-error';
import UserCouldntBeCreated from '../../../domain/entities/errors/user-couldnt-be-created-error';
import InvalidEmail from '../../../domain/entities/errors/invalid-email-error';
import InvalidInterest from '../../../domain/entities/errors/invalid-interest-error';
import InvalidName from '../../../domain/entities/errors/invalid-name-error';
import InvalidPassword from '../../../domain/entities/errors/invalid-password-error';
import InvalidPosition from '../../../domain/entities/errors/invalid-position-error';
import InvalidQuote from '../../../domain/entities/errors/invalid-quote-error';
import InvalidUsername from '../../../domain/entities/errors/invalid-username-error';
import SingleUserOnlyError from '../../../domain/usecase/errors/single-user-only-error';
import InvalidNameRequest from '../errors/invalid-name-request-error';

type GetUserByIdRequest = (req: Request<{ id: string }>, res: Response) => Promise<Response>;
type SignupRequest = (req: Request<{}, {}, CreateUserEntity>, res: Response) => Promise<Response>;

class ExpressUserControllerImpl extends AbstractUserController {
  getUserById: GetUserByIdRequest = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userUsecase.getUserById(id);
      return res.status(statusCodes.success.ok).send({ user });
    } catch (e) {
      throw new InternalRequestError();
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
      if (e instanceof InvalidName) throw new InvalidNameRequest();
      if (e instanceof InvalidUsername) throw new ;
      if (e instanceof InvalidEmail) throw new ;
      if (e instanceof InvalidPassword) throw new ;
      if (e instanceof InvalidPosition) throw new ;
      if (e instanceof InvalidInterest) throw new ;
      if (e instanceof InvalidQuote) throw new ;
      if (e instanceof SingleUserOnlyError) throw new ;
      if (e instanceof UserCouldntBeCreated) throw new ;
      throw new InternalRequest();
    }
  };
}

export default ExpressUserControllerImpl;
