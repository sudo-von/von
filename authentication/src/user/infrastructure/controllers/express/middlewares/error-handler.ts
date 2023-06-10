import { NextFunction, Request, Response } from 'express';
import AbstractRequestError from '../../errors/AbstractRequestError';
import statusCodes from '../../errors/status-codes';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof AbstractRequestError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(statusCodes.serverSide.internalServerError).json({
    message: 'something went wrong, try again later...',
  });
};

export default errorHandler;
