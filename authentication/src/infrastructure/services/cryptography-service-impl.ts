import bcrypt from 'bcrypt';
import CryptographyService from '../../domain/services/cryptography-service';

class CryptographyServiceImpl extends CryptographyService {
  private saltRounds = 10;

  comparePlainAndHash = async (plainData: string, hashedData: string): Promise<boolean> => {
    try {
      const result = await bcrypt.compare(plainData, hashedData);
      return result;
    } catch (e) {
      this.logger.log('warn', `👻 [CryptographyServiceImpl][compare] error: ${(e as Error).message}.`);
      throw new Error('there was an error when trying to compare both hashes');
    }
  };

  hash = async (plainData: string): Promise<string> => {
    try {
      const hashedData = await bcrypt.hash(plainData, this.saltRounds);
      return hashedData;
    } catch (e) {
      this.logger.log('warn', `👻 [CryptographyServiceImpl][hashSensitiveData] error: ${(e as Error).message}.`);
      throw new Error('there was an error when trying to hash the password');
    }
  };
}

export default CryptographyServiceImpl;
