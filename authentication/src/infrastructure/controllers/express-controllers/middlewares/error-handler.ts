import { NextFunction, Request, Response } from 'express';
import { RequestErrorFactory } from '../../errors/request-error-factory';
import { INTERNAL_SERVER_REQUEST } from '../../errors/request-errors';

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof RequestErrorFactory) {
    const { message, statusCode, code } = error;
    return res.status(statusCode).json({ code, error: message });
  }
  return res.status(INTERNAL_SERVER_REQUEST.statusCode).json(
    {
      code: INTERNAL_SERVER_REQUEST.code,
      error: INTERNAL_SERVER_REQUEST.message,
    },
  );
};

export default errorHandler;
