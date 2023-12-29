import ISecurityService from '../../domain/services/security-service/security-service';
import CryptoSecurityService from '../services/security-service/crypto-security-service/crypto-security-service';

type SecurityServices = {
  securityService: ISecurityService;
};

const configureSecurityServices = (): SecurityServices => {
  try {
    const securityService = new CryptoSecurityService();

    return {
      securityService,
    };
  } catch (e) {
    throw new Error(`An error occurred while configuring security services. ${(e as Error).message}`);
  }
};

export default configureSecurityServices;
