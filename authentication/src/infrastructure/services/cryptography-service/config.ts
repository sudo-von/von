import BcryptCryptographyService from './bcrypt-cryptography-service/bcrypt-cryptography-service';

const configureCryptographyService = () => {
  const cryptographyService = new BcryptCryptographyService();

  console.log('🔧 Cryptography service has been configured.');

  return cryptographyService;
};

export default configureCryptographyService;
