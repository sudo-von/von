import CryptoSecurityService from '../services/security-service/crypto-security-service/crypto-security-service';

const configureSecurityService = () => {
  const securityService = new CryptoSecurityService();

  return securityService;
};

export default configureSecurityService;
