import { NextFunction, Request, Response } from 'express';
import TokenService from '../../../services/token-service/token-service';
import statusCodes from '../../status-codes';
import { ControllerUserDto } from '../../dtos/controller-user-dto';

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

    const controllerUserDto: ControllerUserDto = {
      id: decodedToken.id,
      name: decodedToken.name,
      email: decodedToken.email,
      username: decodedToken.username,
      profile_picture: decodedToken.profile_picture,
    };

    req.user = controllerUserDto;

    return next();
  } catch (err) {
    return res.status(statusCodes.clientSide.forbidden).json({
      error: 'The provided token is invalid. Please log in again.',
    });
  }
};

export default authenticationMiddleware;
