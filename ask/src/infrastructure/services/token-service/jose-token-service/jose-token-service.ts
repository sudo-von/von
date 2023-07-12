import {
  errors,
  jwtVerify,
} from 'jose';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../token-service-errors';
import {
  UserToken,
} from '../dtos/user-dto/user-token-dtos';
import TokenService from '../token-service';

class JoseTokenService extends TokenService {
  decode = async (token: string): Promise<UserToken> => {
    try {
      const key = new TextEncoder().encode(this.secret);

      const { payload } = await jwtVerify(token, key);

      return payload as UserToken;
    } catch (e) {
      const error = e as Error;

      if (error instanceof errors.JWTExpired) {
        throw TokenServiceExpiredTokenError;
      }

      throw TokenServiceInvalidTokenError;
    }
  };
}

export default JoseTokenService;
