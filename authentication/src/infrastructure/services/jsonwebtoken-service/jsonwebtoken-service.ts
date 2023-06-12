import jwt from 'jsonwebtoken';
import TokenService from '../../../domain/services/token-service';
import { SmallUserEntity } from '../../../domain/entities/user-entity';
import JSONWebTokenEntity from './jsonwebtoken-entities';
import { TokenServiceInvalidDecodeTokenError, TokenServiceInvalidGenerateTokenError } from '../errors/server-error-factories';

class JSONWebTokenService extends TokenService {
  private readonly expiresIn = 60 * 60;

  private readonly algorithm = 'HS256';

  generateToken = (payload: SmallUserEntity): string => {
    try {
      const token = jwt.sign(
        payload,
        this.secret,
        { algorithm: this.algorithm, expiresIn: this.expiresIn },
      );
      return token;
    } catch (e) {
      throw TokenServiceInvalidGenerateTokenError;
    }
  };

  decodeToken = (token: string): SmallUserEntity => {
    try {
      const payload = jwt.verify(token, this.secret) as JSONWebTokenEntity;

      const smallUserEntity: SmallUserEntity = {
        id: payload.id,
        name: payload.name,
        username: payload.username,
        email: payload.email,
        profile_picture: payload.profile_picture,
      };

      return smallUserEntity;
    } catch (e) {
      throw TokenServiceInvalidDecodeTokenError;
    }
  };
}

export default JSONWebTokenService;
