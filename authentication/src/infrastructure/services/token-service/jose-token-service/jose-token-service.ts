import {
  errors,
  SignJWT,
  jwtVerify,
} from 'jose';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
  TokenServiceFailedTokenGeneration,
} from '../token-service-errors';
import {
  UserToken,
  CreateUserToken,
} from '../dtos/user-dto/user-token-dtos';
import TokenService from '../token-service';
import {
  RestrictedUser,
} from '../../../../domain/entities/user/user-entities';

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

  generate = async (payload: RestrictedUser): Promise<string> => {
    try {
      const key = new TextEncoder().encode(this.secret);

      const createUserToken: CreateUserToken = {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        username: payload.username,
        profile_picture_name: payload.profilePictureName,
      };

      const token = await new SignJWT(createUserToken)
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(key);

      return token;
    } catch (e) {
      throw TokenServiceFailedTokenGeneration;
    }
  };
}

export default JoseTokenService;
