import bcrypt from 'bcrypt';
import crypto from 'crypto';
import {
  CryptographyServiceInvalidCompareError,
  CryptographyServiceInvalidHashDataError,
} from '../security-service-errors';
import SecurityService from '../../../../domain/services/security-service';

class DataSecurityService extends SecurityService {
  hash = (plainData: string): string => {
    try {
      const algorithm = 'md5';
      const encoding = 'hex';
      const hash = crypto.createHash(algorithm).update(plainData).digest(encoding);
      return hash;
    } catch (e) {
      this.loggerService.error(CryptographyServiceInvalidHashDataError.message, e as Error);
      throw CryptographyServiceInvalidHashDataError;
    }
  };

  hashPassword = async (password: string): Promise<string> => {
    try {
      const rounds = 10;
      const hash = await bcrypt.hash(password, rounds);
      return hash;
    } catch (e) {
      this.loggerService.error(CryptographyServiceInvalidHashDataError.message, e as Error);
      throw CryptographyServiceInvalidHashDataError;
    }
  };

  compareHashes = async (plainData: string, hashedData: string): Promise<boolean> => {
    try {
      const result = await bcrypt.compare(plainData, hashedData);
      return result;
    } catch (e) {
      this.loggerService.error(CryptographyServiceInvalidCompareError.message, e as Error);
      throw CryptographyServiceInvalidCompareError;
    }
  };
}

export default DataSecurityService;
