import ISecurityService from '../../domain/services/security-service/security-service';
import CryptoSecurityService from '../services/security-service/crypto-security-service/crypto-security-service';

const configureSecurityService = (): ISecurityService => {
  try {
    const securityService = new CryptoSecurityService();

    return securityService;
  } catch (e) {
    throw new Error(`An error occurred while configuring the security service. ${(e as Error).message}`);
  }
};

export default configureSecurityService;
