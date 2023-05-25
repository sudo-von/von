import { type NextFunction, type Request, type Response } from 'express';
import { RequestError } from '../../../../common/errors/request-error';
import { statusCode } from '../common/status-code';

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  console.log('¿asdhjjkasdhjasdhjasdh');

  res.header('Content-Type', 'application/json');
  if (error instanceof RequestError) {
    return res.status(error.statusCode).send({ error: error.handleErrors() });
  }
  console.log('¿asdhjjkasdhjasdhjasdh');
  return res.status(statusCode.serverErrors.internalServerError).send({ error: 'Something went wrong...' });
};
