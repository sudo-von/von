import LoggerService from '../services/logger-service/logger-service';
import JWTTokenService from '../services/token-service/jwt-token-service/jwt-token-service';

const configureTokenService = (
  SECRET_KEY: string,
  loggerService: LoggerService,
) => {
  const tokenService = new JWTTokenService(SECRET_KEY, loggerService);

  return tokenService;
};

export default configureTokenService;
