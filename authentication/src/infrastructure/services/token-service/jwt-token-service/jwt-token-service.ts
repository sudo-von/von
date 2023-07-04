import jwt, {
  SignOptions,
} from 'jsonwebtoken';
import {
  UserToken,
  CreateUserToken,
} from '../dtos/user-token-dtos';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
  TokenServiceFailedTokenGeneration,
} from '../token-service-errors';
import TokenService from '../token-service';
import {
  RestrictedUser,
} from '../../../../domain/entities/user/user-entities';

class JWTTokenService extends TokenService {
  generateToken = (payload: RestrictedUser): string => {
    try {
      const createUserToken: CreateUserToken = {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        username: payload.username,
        profile_picture_name: payload.profilePictureName,
      };

      const options: SignOptions = { algorithm: 'HS256', expiresIn: 60 * 30 };

      const token = jwt.sign(createUserToken, this.SECRET_KEY, options);
      return token;
    } catch (e) {
      this.loggerService.error(TokenServiceFailedTokenGeneration.message, e as Error);
      throw TokenServiceFailedTokenGeneration;
    }
  };

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
