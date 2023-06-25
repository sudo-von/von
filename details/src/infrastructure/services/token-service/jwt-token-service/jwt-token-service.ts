import jwt from 'jsonwebtoken';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../../errors/token-service-error';
import TokenService from '../token-service';
import TokenUserDto from '../dtos/token-user-dto';

class JWTTokenService extends TokenService {
  decodeToken = (token: string): TokenUserDto => {
    try {
      const payload = jwt.verify(token, this.SECRET_KEY) as TokenUserDto;

      return payload;
    } catch (e) {
      const { name } = e as Error;
      if (name === 'TokenExpiredError') {
        throw TokenServiceExpiredTokenError;
      }
      throw TokenServiceInvalidTokenError;
    }
  };
}

export default JWTTokenService;
