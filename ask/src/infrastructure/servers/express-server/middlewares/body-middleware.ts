import {
  ZodError,
} from 'zod';
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  RequiredFieldServerError,
} from '../../dtos/common/common-server-errors';

const bodyMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(RequiredFieldServerError.statusCode).json({
      code: RequiredFieldServerError.code,
      errors: err.errors.map((e) => e.message),
    });
  }
  return next(err);
};

export default bodyMiddleware;
