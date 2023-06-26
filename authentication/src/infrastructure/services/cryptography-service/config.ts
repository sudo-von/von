import BcryptCryptographyService from './bcrypt-cryptography-service/bcrypt-cryptography-service';

const configureCryptographyServices = () => {
  const cryptographyService = new BcryptCryptographyService();

  return { cryptographyService };
};

export default configureCryptographyServices;
