import bcrypt from 'bcrypt';
import crypto from 'crypto';
import {
  SecurityServicFailedHashComparisonError,
  SecurityServiceFailedChecksumComputingError,
  SecurityServiceFailedPasswordHashingError,
} from '../security-service-errors';
import SecurityService from '../../../../domain/services/security-service';

class DataSecurityService extends SecurityService {
  computeChecksum = (plainData: string): string => {
    try {
      const hash = crypto.createHash('md5').update(plainData).digest('hex');
      return hash;
    } catch (e) {
      this.loggerService.error(SecurityServiceFailedChecksumComputingError.message, e as Error);
      throw SecurityServiceFailedChecksumComputingError;
    }
  };

  hashPassword = async (password: string): Promise<string> => {
    try {
      const hash = await bcrypt.hash(password, 10);
      return hash;
    } catch (e) {
      this.loggerService.error(SecurityServiceFailedPasswordHashingError.message, e as Error);
      throw SecurityServiceFailedPasswordHashingError;
    }
  };

  compareHashes = async (plainData: string, hashedData: string): Promise<boolean> => {
    try {
      const result = await bcrypt.compare(plainData, hashedData);
      return result;
    } catch (e) {
      this.loggerService.error(SecurityServicFailedHashComparisonError.message, e as Error);
      throw SecurityServicFailedHashComparisonError;
    }
  };
}

export default DataSecurityService;
