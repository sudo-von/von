import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  isValidObjectId,
} from 'mongoose';
import {
  InvalidIdParameterServerError,
  RequiredIdParameterServerError,
} from '../../entities/api-entities/api-errors';

const validateIdMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  if (!id) return next(RequiredIdParameterServerError);

  const isIdValid = isValidObjectId(id);
  if (!isIdValid) return next(InvalidIdParameterServerError);

  return next();
};

export default validateIdMiddleware;
