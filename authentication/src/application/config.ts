import UserUsecaseApplication from './user-usecase';
import FileService from '../domain/services/file-service';
import SecurityService from '../domain/services/security-service';
import IUserRepository from '../domain/repositories/user-repository';
import AuthenticationUsecaseApplication from './authentication-usecase';

const configureUsecases = (
  fileService: FileService,
  userRepository: IUserRepository,
  securityService: SecurityService,
) => {
  const userUsecase = new UserUsecaseApplication(
    fileService,
    userRepository,
    securityService,
  );

  const authenticationUsecase = new AuthenticationUsecaseApplication(
    fileService,
    userRepository,
    securityService,
  );

  return { userUsecase, authenticationUsecase };
};

export default configureUsecases;
