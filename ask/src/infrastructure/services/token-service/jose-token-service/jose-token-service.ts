import {
  errors,
  jwtVerify,
} from 'jose';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../token-service-errors';
import TokenService from '../token-service';
import {
  UserToken,
} from '../entities/user-token-entity/user-token-entities';

class JoseTokenService extends TokenService {
  getSecretKey = (): Uint8Array => new TextEncoder().encode(this.secret);

  decodeToken = async (
    token: string,
  ): Promise<UserToken> => {
    try {
      const secretKey = this.getSecretKey();

      const { payload } = await jwtVerify(token, secretKey);

      return payload as UserToken;
    } catch (e) {
      if (e instanceof errors.JWTExpired) {
        throw TokenServiceExpiredTokenError;
      }
      throw TokenServiceInvalidTokenError;
    }
  };
}

export default JoseTokenService;
