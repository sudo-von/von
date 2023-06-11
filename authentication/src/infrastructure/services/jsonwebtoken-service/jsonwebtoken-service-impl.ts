import jwt from 'jsonwebtoken';
import TokenService from '../../../domain/services/token-service';
import LoggerService from '../../../domain/services/logger-service';
import { SmallUserEntity } from '../../../domain/entities/user-entity';
import JSONWebTokenEntity from './jsonwebtoken-entities';

class JSONWebTokenImpl extends TokenService {
  private readonly expiresIn = 60 * 60;

  private readonly algorithm = 'HS256';

  constructor(protected secret: string, protected logger: LoggerService) {
    super(secret, logger);
  }

  generateToken = (payload: SmallUserEntity): string => {
    try {
      const token = jwt.sign(
        payload,
        this.secret,
        { algorithm: this.algorithm, expiresIn: this.expiresIn },
      );
      return token;
    } catch (e) {
      this.logger.log('warn', `👻 [JSONWebTokenImpl][generateToken] error: ${(e as Error).message}.`);
      throw new Error('there was an error when trying generate the token');
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
      this.logger.log('warn', `👻 [JSONWebTokenImpl][generateToken] error: ${(e as Error).message}.`);
      throw new Error('there was an error when trying generate the token');
    }
  };
}

export default JSONWebTokenImpl;
