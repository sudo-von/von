import FileService from '../../domain/services/file-service/file-service';
import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import SecurityService from '../../domain/services/security-service/security-service';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import AuthenticationUsecaseApplication from '../../application/authentication-usecase/authentication-usecase';

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
