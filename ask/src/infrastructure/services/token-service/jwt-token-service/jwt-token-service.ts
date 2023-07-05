import jwt from 'jsonwebtoken';
import {
  UserToken,
} from '../dtos/user-token-dtos';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../token-service-errors';
import TokenService from '../token-service';

class JWTTokenService extends TokenService {
  decodeToken = (token: string): UserToken => {
    try {
      const payload = jwt.verify(token, this.SECRET_KEY) as UserToken;
      return payload;
    } catch (e) {
      const error = e as Error;
      if (error.name === 'TokenExpiredError') {
        this.loggerService.error(TokenServiceExpiredTokenError.message, error);
        throw TokenServiceExpiredTokenError;
      }
      this.loggerService.error(TokenServiceInvalidTokenError.message, error);
      throw TokenServiceInvalidTokenError;
    }
  };
}

export default JWTTokenService;
