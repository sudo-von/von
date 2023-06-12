import bcrypt from 'bcrypt';
import ICryptographyService from '../../../../domain/services/cryptography-service';
import { CryptographyServiceInvalidCompareError, CryptographyServiceInvalidHashDataError } from '../../errors/server-error-factories';

class BcryptService implements ICryptographyService {
  private saltRounds = 10;

  comparePlainAndHash = async (plainData: string, hashedData: string): Promise<boolean> => {
    try {
      const result = await bcrypt.compare(plainData, hashedData);
      return result;
    } catch (e) {
      throw CryptographyServiceInvalidCompareError;
    }
  };

  hash = async (plainData: string): Promise<string> => {
    try {
      const hashedData = await bcrypt.hash(plainData, this.saltRounds);
      return hashedData;
    } catch (e) {
      throw CryptographyServiceInvalidHashDataError;
    }
  };
}

export default BcryptService;
