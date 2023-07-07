import {
  errors,
  jwtVerify,
} from 'jose';
import {
  UserToken,
} from '../dtos/user-token-dtos';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../token-service-errors';
import TokenService from '../token-service';

class JoseTokenService extends TokenService {
  decodeToken = async (token: string): Promise<UserToken> => {
    try {
      const secret = new TextEncoder().encode(this.SECRET_KEY);
      console.log('🚀 ~ file: jose-token-service.ts:18 ~ JoseTokenService ~ decodeToken= ~ secret:', secret);

      const { payload } = await jwtVerify(token, secret);
      console.log('🚀 ~ file: jose-token-service.ts:20 ~ JoseTokenService ~ decodeToken= ~ payload:', payload);

      return payload as UserToken;
    } catch (e) {
      const error = e as Error;
      if (error instanceof errors.JWTExpired) {
        this.loggerService.error(TokenServiceExpiredTokenError.message, error);
        throw TokenServiceExpiredTokenError;
      }
      this.loggerService.error(TokenServiceInvalidTokenError.message, error);
      throw TokenServiceInvalidTokenError;
    }
  };
}

export default JoseTokenService;
