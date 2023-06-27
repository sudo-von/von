import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from '../../status-codes';
import {
  UserNotFoundError,
} from '../../../../domain/errors/user-error';
import TokenService from '../../../services/token-service/token-service';
import IUserRepository from '../../../../domain/repositories/user-repository';

const authenticationMiddleware = (
  tokenService: TokenService,
  userRepository: IUserRepository,
) => async (
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
    const decodeToken = tokenService.decodeToken(token);

    const user = await userRepository.getUserById(decodeToken.id);
    if (!user) throw UserNotFoundError;

    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      iat: decodeToken.iat,
      exp: decodeToken.exp,
      username: user.username,
      profile_picture: user.profilePicture,
    };

    return next();
  } catch (error) {
    console.log('🔥:', (error as Error).message);

    return res.status(statusCodes.clientSide.forbidden).json({
      error: 'The provided token is invalid. Please log in again.',
    });
  }
};

export default authenticationMiddleware;
