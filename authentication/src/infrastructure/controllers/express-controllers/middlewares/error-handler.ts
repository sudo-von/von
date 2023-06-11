import { NextFunction, Request, Response } from 'express';
import { RequestErrorFactory } from '../../errors/request-error-factory';

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { message, statusCode } = error as RequestErrorFactory;
  return res.status(statusCode).json({ error: message });
};

export default errorHandler;
