import IPasswordService from '../../domain/services/password-service/password-service';
import BcryptPasswordService from '../services/password-service/bcrypt-password-manager-service/bcrypt-password-manager-service';

const configurePasswordService = (): IPasswordService => {
  try {
    const passwordService = new BcryptPasswordService();

    return passwordService;
  } catch (e) {
    throw new Error(`An error occurred while configuring the password service. ${(e as Error).message}`);
  }
};

export default configurePasswordService;
