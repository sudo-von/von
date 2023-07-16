import LoggerService from '../services/logger-service/logger-service';
import CryptoSecurityService from '../services/security-service/crypto-security-service/crypto-security-service';

const configureSecurityService = (loggerService: LoggerService) => {
  const securityService = new CryptoSecurityService(loggerService);

  return securityService;
};

export default configureSecurityService;
