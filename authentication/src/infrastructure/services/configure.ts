import JWTTokenService from './token-service/jwt-token-service/jwt-token-service';
import WinstonLoggerService from './logger-service/winston-logger-service/winston-logger-service';
import BcryptCryptographyService from './cryptography-service/bcrypt-cryptography-service/bcrypt-cryptography-service';

const configureServices = (SECRET_KEY: string) => {
  const loggerService = new WinstonLoggerService();
  const tokenService = new JWTTokenService(SECRET_KEY);
  const cryptographyService = new BcryptCryptographyService();

  return {
    tokenService,
    loggerService,
    cryptographyService,
  };
};

export default configureServices;
