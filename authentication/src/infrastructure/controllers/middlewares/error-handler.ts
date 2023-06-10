import { NextFunction, Request, Response } from 'express';
import { RequestErrorFactory } from '../errors';

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const e = error as RequestErrorFactory;
  console.warn(`👻 [errorHandler] name: ${e.name}, error: ${e.message}`);
  return res.status(e.statusCode).json({
    message: e.message,
  });
};

export default errorHandler;
