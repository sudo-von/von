import { NextFunction, Request, Response } from 'express';
import statusCodes from '../../../status-codes';
import TokenService from '../../../../../domain/services/token-service';

const jwtAuthHandler = (tokenService: TokenService) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(statusCodes.clientSide.unauthorized).json({
      message: 'Missing authorization header.',
    });
  }

  const [scheme, token] = authorization.split(' ');
  if (scheme.toLowerCase() !== 'bearer') {
    return res.status(statusCodes.clientSide.unauthorized).json({
      message: 'Authorization scheme not supported.',
    });
  }

  if (!token) {
    return res.status(statusCodes.clientSide.unauthorized).json({
      message: 'Missing token.',
    });
  }

  try {
    const user = tokenService.decodeToken(token);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(statusCodes.clientSide.forbidden).json({
      message: 'The provided token is invalid. Please log in again.',
    });
  }
};

export default jwtAuthHandler;
