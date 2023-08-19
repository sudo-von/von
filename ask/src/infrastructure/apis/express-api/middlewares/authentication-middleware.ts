import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  UserNotFoundServerError,
} from '../../entities/domain-entities/user-entity/user-errors';
import TokenService from '../../../services/token-service/token-service';
import {
  MissingTokenServerError,
  MissingAuthorizationHeaderServerError,
  AuthorizationSchemeNotSupportedServerError,
} from '../../entities/service-entities/token-service-entity/token-service-errors';
import IUserRepository from '../../../../domain/repositories/user-repository/user-repository';

const authenticationMiddleware = (
  tokenService: TokenService,
  userRepository: IUserRepository,
) => async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(MissingAuthorizationHeaderServerError);
  }

  const [scheme, token] = authorization.split(' ');
  if (scheme.toLowerCase() !== 'bearer') {
    return next(AuthorizationSchemeNotSupportedServerError);
  }
  if (!token) {
    return next(MissingTokenServerError);
  }

  try {
    const decodedToken = await tokenService.decodeToken(token);

    const updatedUser = await userRepository.getUser({ id: decodedToken.id });
    if (!updatedUser) return next(UserNotFoundServerError);

    req.user = {
      id: decodedToken.id,
      iat: decodedToken.iat,
      exp: decodedToken.exp,
      username: updatedUser.username,
    };

    return next();
  } catch (e) {
    return next(e);
  }
};

export default authenticationMiddleware;
