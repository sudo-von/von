import {
  createHash,
  randomBytes,
} from 'crypto';
import {
  SecurityServiceFailedToHashError,
  SecurityServiceFailedToRandomHashError,
} from '../security-service-errors';
import {
  Algorithms,
} from '../../../../domain/services/security-service/security-service-algorithms';
import ISecurityService from '../../../../domain/services/security-service/security-service';

class CryptoSecurityService implements ISecurityService {
  generateRandomHash = (
    algorithm: Algorithms,
  ): string => {
    try {
      const salt = randomBytes(16).toString('hex');
      const hash = createHash(algorithm).update(salt).digest('hex');
      return hash;
    } catch (e) {
      throw SecurityServiceFailedToRandomHashError((e as Error).message);
    }
  };

  generateDataHash = (
    plainData: string,
    algorithm: Algorithms,
  ): string => {
    try {
      const hash = createHash(algorithm).update(plainData).digest('hex');
      return hash;
    } catch (e) {
      throw SecurityServiceFailedToHashError((e as Error).message);
    }
  };
}

export default CryptoSecurityService;
