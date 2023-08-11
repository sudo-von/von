import FileService from '../../domain/services/file-service/file-service';
import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import SecurityService from '../../domain/services/security-service/security-service';
import AvatarUsecaseApplication from '../../application/avatar-usecase/avatar-usecase';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import UserDetailsUsecaseApplication from '../../application/user-details-usecase/user-details-usecase';
import IPasswordManagerService from '../../domain/services/password-manager-service/password-manager-service';
import AuthenticationUsecaseApplication from '../../application/authentication-usecase/authentication-usecase';
import SocialNetworksUsecaseApplication from '../../application/social-networks-usecase/social-networks-usecase';

const configureUsecases = (
  avatarFileService: FileService,
  userRepository: IUserRepository,
  securityService: SecurityService,
  socialNetworksFileService: FileService,
  passwordManagerService: IPasswordManagerService,
) => {
  const userUsecase = new UserUsecaseApplication(
    userRepository,
    passwordManagerService,
  );

  const avatarUsecase = new AvatarUsecaseApplication(
    avatarFileService,
    userRepository,
    securityService,
  );

  const userDetailsUsecase = new UserDetailsUsecaseApplication(
    userRepository,
  );

  const authenticationUsecase = new AuthenticationUsecaseApplication(
    userRepository,
    passwordManagerService,
  );

  const socialNetworkUsecase = new SocialNetworksUsecaseApplication(
    socialNetworksFileService,
    userRepository,
    securityService,
  );

  return {
    userUsecase,
    avatarUsecase,
    userDetailsUsecase,
    socialNetworkUsecase,
    authenticationUsecase,
  };
};

export default configureUsecases;
