import {
  ZodError,
} from 'zod';
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCode from 'http-status-codes';

const bodyMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ZodError) {
    const errors = error.errors.map((e) => e.message);
    return res.status(statusCode.BAD_REQUEST).json({ errors });
  }
  return next(error);
};

export default bodyMiddleware;
