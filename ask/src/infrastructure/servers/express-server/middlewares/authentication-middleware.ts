import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  InvalidTokenServerError,
  MissingTokenServerError,
  MissingAuthorizationHeaderServerError,
  AuthorizationSchemeNotSupportedServerError,
} from '../../dtos/token/token-server-errors';
import {
  UserNotFoundError,
} from '../../../../domain/entities/user/user-errors';
import TokenService from '../../../services/token-service/token-service';
import LoggerService from '../../../services/logger-service/logger-service';
import IUserRepository from '../../../../domain/repositories/user/user-repository';

const authenticationMiddleware = (
  tokenService: TokenService,
  loggerService: LoggerService,
  userRepository: IUserRepository,
) => async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) return next(MissingAuthorizationHeaderServerError);

  const [scheme, token] = authorization.split(' ');
  if (scheme.toLowerCase() !== 'bearer') return next(AuthorizationSchemeNotSupportedServerError);
  if (!token) return next(MissingTokenServerError);

  try {
    const decodedToken = await tokenService.decode(token);

    const updatedUser = await userRepository.getUser({ userId: decodedToken.id });
    if (!updatedUser) return next(UserNotFoundError);

    req.user = {
      id: updatedUser.userId,
      name: decodedToken.name,
      email: decodedToken.email,
      username: updatedUser.username,
      profile_picture_name: decodedToken.profile_picture_name,
      iat: decodedToken.iat,
      exp: decodedToken.exp,
    };

    return next();
  } catch (e) {
    loggerService.error(InvalidTokenServerError.error, e as Error);
    return next(InvalidTokenServerError);
  }
};

export default authenticationMiddleware;
