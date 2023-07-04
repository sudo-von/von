import LoggerService from '../services/logger-service/logger-service';
import DataSecurityService from '../services/security-service/data-security-service/data-security-service';

const configureSecurityService = (loggerService: LoggerService) => {
  const securityService = new DataSecurityService(loggerService);

  return securityService;
};

export default configureSecurityService;
