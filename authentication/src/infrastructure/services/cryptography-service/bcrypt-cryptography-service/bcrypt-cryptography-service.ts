import bcrypt from 'bcrypt';
import {
  CryptographyServiceInvalidCompareError,
  CryptographyServiceInvalidHashDataError,
} from '../../errors/cryptography-service-errors';
import ICryptographyService from '../../../../domain/services/cryptography-service';

class BcryptCryptographyService implements ICryptographyService {
  hash = async (plainData: string): Promise<string> => {
    try {
      const rounds = 10;
      const hashedData = await bcrypt.hash(plainData, rounds);
      return hashedData;
    } catch (e) {
      console.log('🔥:', (e as Error).message);
      throw CryptographyServiceInvalidHashDataError;
    }
  };

  comparePlainAndHash = async (plainData: string, hashedData: string): Promise<boolean> => {
    try {
      const result = await bcrypt.compare(plainData, hashedData);
      return result;
    } catch (e) {
      console.log('🔥:', (e as Error).message);
      throw CryptographyServiceInvalidCompareError;
    }
  };
}

export default BcryptCryptographyService;
