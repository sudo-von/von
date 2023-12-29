import IPasswordService from '../../domain/services/password-service/password-service';
import BcryptPasswordManagerService from '../services/password-service/bcrypt-password-manager-service/bcrypt-password-manager-service';

type PasswordServices = {
  passwordService: IPasswordService;
};

const configurePasswordServices = (): PasswordServices => {
  try {
    const passwordService = new BcryptPasswordManagerService();

    return {
      passwordService,
    };
  } catch (e) {
    throw new Error(`An error occurred while configuring password services. ${(e as Error).message}`);
  }
};

export default configurePasswordServices;
