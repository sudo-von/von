import jwt from 'jsonwebtoken';
import { SmallUserEntity } from '../../domain/entities/small-user-entity';
import TokenService from '../../domain/services/token-service';

class TokenServiceImpl extends TokenService {
  generate = (payload: SmallUserEntity): string => {
    try {
      const token = jwt.sign(payload, this.secret, { algorithm: 'HS256', expiresIn: 60 * 60 });
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
