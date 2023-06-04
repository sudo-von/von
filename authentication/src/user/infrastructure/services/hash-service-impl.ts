import bcrypt from 'bcrypt';
import { HashService } from '../../domain/services/hash-service';

class HashServiceImpl implements HashService {
  private saltRounds = 10;

  hashSensitiveData = async (data: string): Promise<string> => {
    try {
      const hashedData = await bcrypt.hash(data, this.saltRounds);
      return hashedData;
    } catch (e) {
      console.warn(`👻 [HashServiceImpl][hashSensitiveData] error: ${(e as Error).message}.`);
      throw new Error('there was an error when trying to hash the password');
    }
  };
}

export default HashServiceImpl;
