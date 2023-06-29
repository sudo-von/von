import jwt from 'jsonwebtoken';
import {
  TokenUserDto,
} from '../dtos/token-user-dto';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../../errors/token-service-errors';
import TokenService from '../token-service';

class JWTTokenService extends TokenService {
  decodeToken = (token: string): TokenUserDto => {
    try {
      const payload = jwt.verify(token, this.SECRET_KEY) as TokenUserDto;
      return payload;
    } catch (e) {
      const { name, message } = e as Error;
      console.log(`⛔️ An error occurred with the token service: ${message}.`);
      if (name === 'TokenExpiredError') {
        throw TokenServiceExpiredTokenError;
      }
      throw TokenServiceInvalidTokenError;
    }
  };
}

export default JWTTokenService;
