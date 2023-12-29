import ISecurityService from '../../domain/services/security-service/security-service';
import CryptoSecurityService from '../services/security-service/crypto-security-service/crypto-security-service';

type SecurityServices = {
  securityService: ISecurityService;
};

const configureSecurityServices = (): SecurityServices => {
  const securityService = new CryptoSecurityService();

  return {
    securityService,
  };
};

export default configureSecurityServices;
