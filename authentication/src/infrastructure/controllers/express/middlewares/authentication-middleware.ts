import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from '../../status-codes';
import TokenService from '../../../../domain/services/token-service';

const authenticationMiddleware = (tokenService: TokenService) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(statusCodes.clientSide.unauthorized).json({
      error: 'Missing authorization header.',
    });
  }

  const [scheme, token] = authorization.split(' ');
  if (scheme.toLowerCase() !== 'bearer') {
    return res.status(statusCodes.clientSide.unauthorized).json({
      error: 'Authorization scheme not supported.',
    });
  }

  if (!token) {
    return res.status(statusCodes.clientSide.unauthorized).json({
      error: 'Missing token.',
    });
  }

  try {
    const decodedToken = tokenService.decodeToken(token);

    req.user = decodedToken;

    return next();
  } catch (error) {
    console.log('🔥:', (error as Error).message);

    return res.status(statusCodes.clientSide.forbidden).json({
      error: 'The provided token is invalid. Please log in again.',
    });
  }
};

export default authenticationMiddleware;
