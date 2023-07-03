// import UserUsecaseApplication from './user-usecase-application';
import IUserRepository from '../domain/repositories/user-repository';
import ICryptographyService from '../domain/services/cryptography-service';
import AuthenticationUsecaseApplication from './authentication-usecase-application';
import ILoggerService from '../infrastructure/services/logger-service/logger-service';

const configureUsecases = (
  loggerService: ILoggerService,
  userRepository: IUserRepository,
  cryptographyService: ICryptographyService,
) => {
  // const userUsecase = new UserUsecaseApplication(
  //  userRepository,
  //  cryptographyService,
  // );

  const authenticationUsecase = new AuthenticationUsecaseApplication(
    userRepository,
    cryptographyService,
  );

  loggerService.info('Usecases have been configured.');

  return { // userUsecase,
    authenticationUsecase,
  };
};

export default configureUsecases;
