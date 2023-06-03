import bcrypt from 'bcrypt';
import { HashService } from '../../domain/services/hash-service';

class HashServiceImpl implements HashService {
  private saltRounds = 10;

  hashSensitiveData = async (password: string): Promise<string> => {
    try {
      const hashedPassword = await bcrypt.hash(password, this.saltRounds);
      return hashedPassword;
    } catch (e) {
      throw new Error('⚠️ there was an error when trying to hash the password');
    }
  };
}

export default HashServiceImpl;
