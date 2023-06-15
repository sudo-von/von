import jwt from 'jsonwebtoken';
import TokenService, { DecodedToken, User } from '../token-service';
import { TokenServiceExpiredTokenError, TokenServiceInvalidTokenError } from '../../errors/server-error-factories';

class JSONWebTokenService extends TokenService {
  decodeToken = (token: string): User => {
    try {
      const decodedToken = jwt.verify(token, this.secret) as DecodedToken;

      const user: User = {
        id: decodedToken.id,
        name: decodedToken.name,
        username: decodedToken.username,
        email: decodedToken.email,
        profile_picture: decodedToken.profile_picture,
      };

      return user;
    } catch (e) {
      if ((e as Error).name === 'TokenExpiredError') {
        throw TokenServiceExpiredTokenError;
      }
      throw TokenServiceInvalidTokenError;
    }
  };
}

export default JSONWebTokenService;
