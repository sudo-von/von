import { type Request, type Response, type NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validateBodyHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    /* TO-DO: Create custom class. */
    const serializedErrors = errors.array().map((error) => error.msg);
    res.status(400).send({ errors: serializedErrors });
    return;
  }

  next();
};
