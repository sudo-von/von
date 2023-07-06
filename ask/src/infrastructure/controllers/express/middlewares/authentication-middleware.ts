import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  MissingTokenControllerError,
  MissingAuthorizationHeaderControllerError,
  AuthorizationSchemeNotSupportedControllerError,
} from '../../errors/request-controller-errors';
import {
  UserNotFoundError,
} from '../../../../domain/entities/user/user-errors';
import {
  TokenServiceInvalidTokenControllerError,
} from '../../errors/token-service-controller-errors';
import TokenService from '../../../services/token-service/token-service';
import LoggerService from '../../../services/logger-service/logger-service';
import IUserRepository from '../../../../domain/repositories/user-repository';

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

  if (!authorization) throw MissingAuthorizationHeaderControllerError;

  const [scheme, token] = authorization.split(' ');
  if (scheme.toLowerCase() !== 'bearer') throw AuthorizationSchemeNotSupportedControllerError;

  if (!token) throw MissingTokenControllerError;

  try {
    const decodedToken = tokenService.decodeToken(token);

    const updatedUser = await userRepository.getUserById(decodedToken.id);
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
    loggerService.error(TokenServiceInvalidTokenControllerError.message, e as Error);
    throw TokenServiceInvalidTokenControllerError;
  }
};

export default authenticationMiddleware;
