import ILoggerService from '../logger-service/logger-service';
import BcryptCryptographyService from './bcrypt-cryptography-service/bcrypt-cryptography-service';

const configureCryptographyService = (loggerService: ILoggerService) => {
  const cryptographyService = new BcryptCryptographyService();

  loggerService.info('Cryptography service has been configured.');

  return cryptographyService;
};

export default configureCryptographyService;
