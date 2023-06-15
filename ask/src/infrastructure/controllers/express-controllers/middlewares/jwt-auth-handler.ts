import { NextFunction, Request, Response } from 'express';
import TokenService from '../../../services/token-service/token-service';
import statusCodes from '../../status-codes';

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
    req.user = tokenService.decodeToken(token);
    return next();
  } catch (err) {
    return res.status(statusCodes.clientSide.forbidden).json({
      message: 'The provided token is invalid. Please log in again.',
    });
  }
};

export default jwtAuthHandler;
