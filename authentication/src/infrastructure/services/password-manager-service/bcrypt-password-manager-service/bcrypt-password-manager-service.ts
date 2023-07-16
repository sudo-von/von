import bcrypt from 'bcrypt';
import {
  PasswordManagerServiceFailedToHashPasswordError,
  PasswordManagerServiceFailedPasswordComparisonError,
} from '../password-manager-service-errors';
import IPasswordManagerService from '../../../../domain/services/password-manager-service/password-manager-service';

class BcryptPasswordManagerService implements IPasswordManagerService {
  hashPassword = async (password: string): Promise<string> => {
    try {
      const hash = await bcrypt.hash(password, 10);
      return hash;
    } catch (e) {
      throw PasswordManagerServiceFailedToHashPasswordError((e as Error).message);
    }
  };

  comparePasswords = async (plainData: string, hashedPassword: string): Promise<boolean> => {
    try {
      const result = await bcrypt.compare(plainData, hashedPassword);
      return result;
    } catch (e) {
      throw PasswordManagerServiceFailedPasswordComparisonError((e as Error).message);
    }
  };
}

export default BcryptPasswordManagerService;
