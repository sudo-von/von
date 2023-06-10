import jwt from 'jsonwebtoken';
import TokenService from '../../domain/services/token-service';
import { SmallUserEntity } from '../../domain/entities/user-entity';

class TokenServiceImpl extends TokenService {
  private expiresIn = 60 * 60;

  generate = (payload: SmallUserEntity): string => {
    try {
      const token = jwt.sign(payload, this.secret, { algorithm: 'HS256', expiresIn: this.expiresIn });
      return token;
    } catch (e) {
      console.warn(`👻 [TokenServiceImpl][generateToken] error: ${(e as Error).message}.`);
      throw new Error('there was an error when trying generate the token');
    }
  };

  verify = (token: string): SmallUserEntity => {
    try {
      const decoded = jwt.verify(token, this.secret) as SmallUserEntity;
      return decoded;
    } catch (e) {
      console.warn(`👻 [TokenServiceImpl][generateToken] error: ${(e as Error).message}.`);
      throw new Error('there was an error when trying generate the token');
    }
  };
}

export default TokenServiceImpl;
