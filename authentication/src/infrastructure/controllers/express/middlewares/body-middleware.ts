import {
  ZodError,
} from 'zod';
import {
  MulterError,
} from 'multer';
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from '../../status-codes';
import { InvalidFileParameterControllerError } from '../../errors/common-controller-error';

const bodyMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof MulterError) {
    return next(InvalidFileParameterControllerError);
  }
  if (error instanceof ZodError) {
    const errors = error.errors.map((e) => e.message);
    return res.status(statusCode.clientSide.badRequest).json({ errors });
  }
  if (error instanceof MessageBrokerErrorFactory) {
    return res.end();
  }
  return next(error);
};

export default bodyMiddleware;
