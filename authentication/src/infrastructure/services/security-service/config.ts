import LoggerService from '../logger-service/logger-service';
import DataSecurityService from './data-security-service/data-security-service';

const configureSecurityService = (loggerService: LoggerService) => {
  const securityService = new DataSecurityService(loggerService);

  return securityService;
};

export default configureSecurityService;
