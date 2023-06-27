import UserUsecaseApplication from './user-usecase-application';
import IUserRepository from '../domain/repositories/user-repository';
import ICryptographyService from '../domain/services/cryptography-service';
import AuthenticationUsecaseApplication from './authentication-usecase-application';

const configureUsecases = (
  userRepository: IUserRepository,
  cryptographyService: ICryptographyService,
) => {
  const userUsecase = new UserUsecaseApplication(
    userRepository,
    cryptographyService,
  );

  const authenticationUsecase = new AuthenticationUsecaseApplication(
    userRepository,
    cryptographyService,
  );

  console.log('📖 Usecases have been configured.');

  return { userUsecase, authenticationUsecase };
};

export default configureUsecases;
