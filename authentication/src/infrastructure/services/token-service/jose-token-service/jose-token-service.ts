import {
  errors,
  SignJWT,
  jwtVerify,
} from 'jose';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
  TokenServiceFailedTokenGenerationError,
} from '../token-service-errors';
import {
  TokenExpiration,
} from '../dtos/token-dto/token-dtos';
import {
  UserToken,
  CreateUserToken,
} from '../dtos/user-dto/user-token-dtos';
import TokenService from '../token-service';
import {
  SecureUser,
} from '../../../../domain/entities/user-entity/user-entities';

class JoseTokenService extends TokenService {
  decode = async (token: string): Promise<UserToken> => {
    try {
      const key = new TextEncoder().encode(this.secret);

      const { payload } = await jwtVerify(token, key);

      return payload as UserToken;
    } catch (e) {
      if (e instanceof errors.JWTExpired) {
        throw TokenServiceExpiredTokenError;
      }
      throw TokenServiceInvalidTokenError;
    }
  };

  generate = async (payload: SecureUser, expiration: TokenExpiration): Promise<string> => {
    try {
      const key = new TextEncoder().encode(this.secret);

      const createUserToken: CreateUserToken = {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        avatar: payload.avatar,
        username: payload.username,
      };

      const jwt = new SignJWT(createUserToken);

      const token = await jwt
        .setIssuedAt()
        .setExpirationTime(expiration)
        .sign(key);

      return token;
    } catch (e) {
      throw TokenServiceFailedTokenGenerationError((e as Error).message);
    }
  };
}

export default JoseTokenService;
