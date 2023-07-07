import LoggerService from '../services/logger-service/logger-service';
import JoseTokenService from '../services/token-service/jose-token-service/jose-token-service';

const configureTokenService = (
  SECRET_KEY: string,
  loggerService: LoggerService,
) => {
  const tokenService = new JoseTokenService(SECRET_KEY, loggerService);

  return tokenService;
};

export default configureTokenService;
