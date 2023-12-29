import IPasswordService from '../../domain/services/password-service/password-service';
import BcryptPasswordManagerService from '../services/password-service/bcrypt-password-manager-service/bcrypt-password-manager-service';

type PasswordServices = {
  passwordManagerService: IPasswordService;
};

const configurePasswordServices = (): PasswordServices => {
  const passwordManagerService = new BcryptPasswordManagerService();

  return {
    passwordManagerService,
  };
};

export default configurePasswordServices;
