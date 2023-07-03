import ILoggerService from '../logger-service/logger-service';
import JWTTokenService from './jwt-token-service/jwt-token-service';

const configureTokenService = (
  SECRET_KEY: string,
  loggerService: ILoggerService,
) => {
  const tokenService = new JWTTokenService(SECRET_KEY);

  loggerService.info('Token service has been configured.');

  return tokenService;
};

export default configureTokenService;
