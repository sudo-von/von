import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import statusCodes from '../../status-codes';

const bodyHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ZodError && !error.isEmpty) {
    const firstError = error.errors[0];
    return res.status(statusCodes.clientSide.badRequest).json({ error: firstError.message });
  }
  return next(error);
};

export default bodyHandler;
