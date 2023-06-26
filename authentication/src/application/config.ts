import TokenService from '../domain/services/token-service';
import UserUsecaseApplication from './user-usecase-application';
import IUserRepository from '../domain/repositories/user-repository';
import ICryptographyService from '../domain/services/cryptography-service';
import AuthenticationUsecaseApplication from './authentication-usecase-application';

const configureUsecases = (
  tokenService: TokenService,
  userRepository: IUserRepository,
  cryptographyService: ICryptographyService,
) => {
  const userUsecase = new UserUsecaseApplication(
    userRepository,
    cryptographyService,
  );

  const authenticationUsecase = new AuthenticationUsecaseApplication(
    tokenService,
    userRepository,
    cryptographyService,
  );

  return { userUsecase, authenticationUsecase };
};

export default configureUsecases;
