import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import statusCodes from '../../status-codes';

const validateRequestBodyHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ZodError) {
    const errors = error.errors.map((e) => e.message);
    return res.status(statusCodes.clientSide.badRequest).json({ errors });
  }
  return next(error);
};

export default validateRequestBodyHandler;
