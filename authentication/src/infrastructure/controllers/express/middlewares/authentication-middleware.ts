import {
  Request,
  Response,
  NextFunction,
} from 'express';
import statusCodes from '../../status-codes';
import {
  UserNotFoundError,
} from '../../../../domain/entities/user/user-errors';
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
    const decodedToken = tokenService.decodeToken(token);

    const updatedUser = await userRepository.getUserById(decodedToken.id);
    if (!updatedUser) throw UserNotFoundError;

    req.user = {
      id: updatedUser.id,
      iat: decodedToken.iat,
      exp: decodedToken.exp,
      name: updatedUser.name,
      email: updatedUser.email,
      username: updatedUser.username,
      profile_picture: updatedUser.profilePictureUrl,
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
