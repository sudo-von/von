import { type Request, type Response, type NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestBodyError } from '../errors/request-body-error';

export const validateBodyHandler = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) throw new RequestBodyError(errors.array());

  next();
};
