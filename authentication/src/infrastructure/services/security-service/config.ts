import LoggerService from '../logger-service/logger-service';
import CryptoSecurityService from './crypto-security-service/crypto-security-service';

const configureSecurityService = (loggerService: LoggerService) => {
  const securityService = new CryptoSecurityService(loggerService);

  return securityService;
};

export default configureSecurityService;
