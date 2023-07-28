import {
  createHash,
} from 'crypto';
import SecurityServiceFailedToHashError from '../security-service-errors';
import {
  SupportedAlgorithms,
} from '../../../../domain/services/security-service/security-service-algorithms';
import ISecurityService from '../../../../domain/services/security-service/security-service';

class CryptoSecurityService implements ISecurityService {
  hashData = (plainData: string, algorithm: SupportedAlgorithms): string => {
    try {
      const hash = createHash(algorithm).update(plainData).digest('hex');
      return hash;
    } catch (e) {
      throw SecurityServiceFailedToHashError((e as Error).message);
    }
  };
}

export default CryptoSecurityService;
