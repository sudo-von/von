import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validateBodyHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const serializedErrors = errors.array().map((error) => error.msg);
    return res.status(400).send({ errors: serializedErrors });
  }

  next();
};
