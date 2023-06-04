import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import statusCodes from '../errors/status-codes';

const validatorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(statusCodes.clientSide.badRequest).json({
      message: errors.array().map((e) => e.msg),
    });
  }

  return next();
};

export default validatorHandler;
