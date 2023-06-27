import jwt, { SignOptions } from 'jsonwebtoken';
import {
  TokenUserDto,
  CreateTokenUserDto,
} from '../dtos/token-user-dto';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../../errors/token-service-errors';
import {
  RestrictedUserEntity,
} from '../../../../domain/entities/user-entity';
import TokenService from '../token-service';

class JWTTokenService extends TokenService {
  generateToken = (payload: RestrictedUserEntity): string => {
    const createTokenUserDto: CreateTokenUserDto = {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      username: payload.username,
      profile_picture: payload.profilePicture,
    };
    const options: SignOptions = { algorithm: 'HS256', expiresIn: 60 * 30 };
    const token = jwt.sign(createTokenUserDto, this.SECRET_KEY, options);
    return token;
  };

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
