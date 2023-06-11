import { NextFunction, Request, Response } from 'express';
import { ErrorName } from '../../../../domain/errors/errors';
import {
  InvalidNameRequestError,
  InvalidUsernameRequestError,
  InvalidPasswordRequestError,
  InvalidPositionRequestError,
  InvalidInterestRequestError,
  InvalidQuoteRequestError,
  SingleUserOnlyRequestError,
  UserCouldntBeCreatedRequestError,
  InternalServerRequestError,
  InvalidCredentialsRequestError,
} from '../../errors/request-error-factories';

const exceptionHandler = (
  error: Error,
  _req: Request,
  _res: Response,
  _next: NextFunction,
) => {
  const name = error.name as ErrorName;
  if (name === 'InvalidNameError') throw new InvalidNameRequestError();
  if (name === 'InvalidUsernameError') throw new InvalidUsernameRequestError();
  if (name === 'InvalidPasswordError') throw new InvalidPasswordRequestError();
  if (name === 'InvalidPositionError') throw new InvalidPositionRequestError();
  if (name === 'InvalidInterestError') throw new InvalidInterestRequestError();
  if (name === 'InvalidQuoteError') throw new InvalidQuoteRequestError();
  if (name === 'SingleUserOnlyError') throw new SingleUserOnlyRequestError();
  if (name === 'UserCouldntBeCreatedError') throw new UserCouldntBeCreatedRequestError();
  if (name === 'InvalidCredentialsError') throw new InvalidCredentialsRequestError();
  throw new InternalServerRequestError();
};

export default exceptionHandler;
