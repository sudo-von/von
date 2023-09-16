import {
  createHash,
} from 'crypto';
import SecurityServiceFailedToHashError from '../security-service-errors';
import {
  Algorithms,
} from '../../../../domain/services/security-service/security-service-algorithms';
import ISecurityService from '../../../../domain/services/security-service/security-service';

class CryptoSecurityService implements ISecurityService {
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
