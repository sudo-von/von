import bcrypt from 'bcrypt';
import crypto from 'crypto';
import {
  SecurityServicUncaughtCompareHashesError,
  SecurityServiceUncaughtComputeChecksumError,
  SecurityServiceUncaughtHashPasswordError,
} from '../security-service-errors';
import SecurityService from '../../../../domain/services/security-service';

class DataSecurityService extends SecurityService {
  computeChecksum = (plainData: string): string => {
    try {
      const algorithm = 'md5';
      const encoding = 'hex';
      const hash = crypto.createHash(algorithm).update(plainData).digest(encoding);
      return hash;
    } catch (e) {
      this.loggerService.error(SecurityServiceUncaughtComputeChecksumError.message, e as Error);
      throw SecurityServiceUncaughtComputeChecksumError;
    }
  };

  hashPassword = async (password: string): Promise<string> => {
    try {
      const rounds = 10;
      const hash = await bcrypt.hash(password, rounds);
      return hash;
    } catch (e) {
      this.loggerService.error(SecurityServiceUncaughtHashPasswordError.message, e as Error);
      throw SecurityServiceUncaughtHashPasswordError;
    }
  };

  compareHashes = async (plainData: string, hashedData: string): Promise<boolean> => {
    try {
      const result = await bcrypt.compare(plainData, hashedData);
      return result;
    } catch (e) {
      this.loggerService.error(SecurityServicUncaughtCompareHashesError.message, e as Error);
      throw SecurityServicUncaughtCompareHashesError;
    }
  };
}

export default DataSecurityService;
