import TokenService from '../domain/services/token-service';
import LoggerService from '../domain/services/logger-service';
import AuthenticationUsecaseApplication from './auth-usecase-impl';
import IUserRepository from '../domain/repositories/user-repository';
import ICryptographyService from '../domain/services/cryptography-service';

const configureUsecases = (
  tokenService: TokenService,
  loggerService: LoggerService,
  userRepository: IUserRepository,
  cryptographyService: ICryptographyService,
) => {
  const authenticationUsecase = new AuthenticationUsecaseApplication(
    tokenService,
    loggerService,
    userRepository,
    cryptographyService,
  );

  return { authenticationUsecase };
};

export default configureUsecases;
