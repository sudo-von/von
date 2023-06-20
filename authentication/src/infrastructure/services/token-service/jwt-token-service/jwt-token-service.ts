import jwt from 'jsonwebtoken';
import JSONWebTokenDto from './dtos/jsonwebtoken-dto';
import TokenService from '../../../../domain/services/token-service';
import { EssentialUserEntity } from '../../../../domain/entities/user-entity';
import { TokenServiceExpiredTokenError, TokenServiceInvalidTokenError } from '../../errors/server-error-factories';

class JWTTokenService extends TokenService {
  private readonly expiresIn = 60 * 30;

  private readonly algorithm = 'HS256';

  generateToken = (payload: EssentialUserEntity): string => {
    const token = jwt.sign(
      payload,
      this.SECRET_KEY,
      { algorithm: this.algorithm, expiresIn: this.expiresIn },
    );
    return token;
  };

  decodeToken = (token: string): EssentialUserEntity => {
    try {
      const payload = jwt.verify(token, this.SECRET_KEY) as JSONWebTokenDto;

      const smallUserEntity: EssentialUserEntity = {
        id: payload.id,
        name: payload.name,
        username: payload.username,
        email: payload.email,
        profilePicture: payload.profilePicture,
      };

      return smallUserEntity;
    } catch (e) {
      if ((e as Error).name === 'TokenExpiredError') {
        throw TokenServiceExpiredTokenError;
      }
      throw TokenServiceInvalidTokenError;
    }
  };
}

export default JWTTokenService;
