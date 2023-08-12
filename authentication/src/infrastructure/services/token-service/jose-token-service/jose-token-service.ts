import {
  errors,
  SignJWT,
  jwtVerify,
} from 'jose';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
  TokenServiceFailedToGenerateTokenError,
} from '../token-service-errors';
import TokenService from '../token-service';
import {
  Expiration,
} from '../entities/expiration-entity/expiration-entities';
import {
  UserToken,
  CreateUserToken,
} from '../entities/user-token-entity/user-token-entities';
import {
  DetailedSecureUser,
} from '../../../../domain/entities/user-entity/user-entities';

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

  generateToken = async (
    payload: DetailedSecureUser,
    expiration: Expiration,
  ): Promise<string> => {
    try {
      const secretKey = this.getSecretKey();

      const createUserToken: CreateUserToken = {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        username: payload.username,
      };

      const jwt = new SignJWT(createUserToken);

      const token = await jwt
        .setIssuedAt()
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime(expiration)
        .sign(secretKey);

      return token;
    } catch (e) {
      throw TokenServiceFailedToGenerateTokenError((e as Error).message);
    }
  };
}

export default JoseTokenService;
