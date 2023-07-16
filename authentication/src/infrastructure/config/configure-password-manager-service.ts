import BcryptPasswordManagerService from '../services/password-manager-service/bcrypt-password-manager-service/bcrypt-password-manager-service';

const configurePasswordManagerService = () => {
  const passwordManagerService = new BcryptPasswordManagerService();

  return passwordManagerService;
};

export default configurePasswordManagerService;