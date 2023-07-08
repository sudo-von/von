import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  MissingTokenServerError,
  MissingAuthorizationHeaderServerError,
  AuthorizationSchemeNotSupportedServerError,
} from '../../errors/request-server-errors';
import {
  UserNotFoundError,
} from '../../../../domain/entities/user/user-errors';
import {
  TokenServiceInvalidTokenServerError,
} from '../../errors/token-server-errors';
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

  if (!authorization) throw MissingAuthorizationHeaderServerError;

  const [scheme, token] = authorization.split(' ');
  if (scheme.toLowerCase() !== 'bearer') throw AuthorizationSchemeNotSupportedServerError;

  if (!token) throw MissingTokenServerError;

  try {
    const decodedToken = await tokenService.decode(token);

    const updatedUser = await userRepository.getUser({ id: decodedToken.id });
    if (!updatedUser) throw UserNotFoundError;

    req.user = {
      id: updatedUser.id,
      name: decodedToken.name,
      email: decodedToken.email,
      username: updatedUser.username,
      profile_picture_name: decodedToken.profile_picture_name,
      iat: decodedToken.iat,
      exp: decodedToken.exp,
    };

    return next();
  } catch (e) {
    loggerService.error(TokenServiceInvalidTokenServerError.message, e as Error);
    throw TokenServiceInvalidTokenServerError;
  }
};

export default authenticationMiddleware;
