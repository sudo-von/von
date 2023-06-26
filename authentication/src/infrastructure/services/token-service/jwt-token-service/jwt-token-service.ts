import jwt, { SignOptions } from 'jsonwebtoken';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../../errors/token-service-errors';
import {
  RestrictedUserEntity,
} from '../../../../domain/entities/user-entity';
import TokenUserDto from '../dtos/token-user-dto';
import TokenService from '../../../../domain/services/token-service';

class JWTTokenService extends TokenService {
  generateToken = (payload: RestrictedUserEntity): string => {
    const options: SignOptions = { algorithm: 'HS256', expiresIn: 60 * 30 };
    const token = jwt.sign(payload, this.SECRET_KEY, options);
    return token;
  };

  decodeToken = (token: string): RestrictedUserEntity => {
    try {
      const payload = jwt.verify(token, this.SECRET_KEY) as TokenUserDto;

      const restrictedUserEntity: RestrictedUserEntity = {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        username: payload.username,
        profilePicture: payload.profile_picture,
      };

      return restrictedUserEntity;
    } catch (e) {
      const { name, message } = e as Error;
      console.log('🔥:', message);
      if (name === 'TokenExpiredError') {
        throw TokenServiceExpiredTokenError;
      }
      throw TokenServiceInvalidTokenError;
    }
  };
}

export default JWTTokenService;
