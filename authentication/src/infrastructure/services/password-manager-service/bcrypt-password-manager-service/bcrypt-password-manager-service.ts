import bcrypt from 'bcrypt';
import {
  PasswordManagerServiceFailedToHashError,
  PasswordManagerServiceFailedToCompareError,
} from '../password-manager-service-errors';
import IPasswordManagerService from '../../../../domain/services/password-manager-service/password-manager-service';

class BcryptPasswordManagerService implements IPasswordManagerService {
  hashPassword = async (password: string): Promise<string> => {
    try {
      const salt = 10;
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (e) {
      throw PasswordManagerServiceFailedToHashError((e as Error).message);
    }
  };

  comparePasswords = async (plainData: string, hashedPassword: string): Promise<boolean> => {
    try {
      const result = await bcrypt.compare(plainData, hashedPassword);
      return result;
    } catch (e) {
      throw PasswordManagerServiceFailedToCompareError((e as Error).message);
    }
  };
}

export default BcryptPasswordManagerService;
