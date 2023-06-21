import TokenService from '../domain/services/token-service';
import IUserRepository from '../domain/repositories/user-repository';
import ICryptographyService from '../domain/services/cryptography-service';
import AuthenticationUsecaseApplication from './authentication-usecase-application';
import UserUsecaseApplication from './user-usecase-application';

const configureUsecases = (
  tokenService: TokenService,
  userRepository: IUserRepository,
  cryptographyService: ICryptographyService,
) => {
  const authenticationUsecase = new AuthenticationUsecaseApplication(
    tokenService,
    userRepository,
    cryptographyService,
  );

  const userUsecase = new UserUsecaseApplication(
    userRepository,
    cryptographyService,
  );

  return { authenticationUsecase, userUsecase };
};

export default configureUsecases;
