import jwt from 'jsonwebtoken';
import JSONWebTokenDto from './dtos/jsonwebtoken-dto';
import TokenService from '../../../../domain/services/token-service';
import { SmallUserEntity } from '../../../../domain/entities/user-entity';
import { TokenServiceExpiredTokenError, TokenServiceInvalidTokenError } from '../../errors/server-error-factories';

class JSONWebTokenService extends TokenService {
  private readonly expiresIn = 60 * 30;

  private readonly algorithm = 'HS256';

  generateToken = (payload: SmallUserEntity): string => {
    const token = jwt.sign(
      payload,
      this.secret,
      { algorithm: this.algorithm, expiresIn: this.expiresIn },
    );
    return token;
  };

  decodeToken = (token: string): SmallUserEntity => {
    try {
      const payload = jwt.verify(token, this.secret) as JSONWebTokenDto;

      const smallUserEntity: SmallUserEntity = {
        id: payload.id,
        name: payload.name,
        username: payload.username,
        email: payload.email,
        profile_picture: payload.profile_picture,
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

export default JSONWebTokenService;
