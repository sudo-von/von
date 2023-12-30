import {
  FileServices,
} from './configure-file-services';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import AvatarUsecase from '../../domain/usecases/avatar-usecase/avatar-usecase';
import UserUsecaseApplication from '../../application/user-usecase/user-usecase';
import AvatarUsecaseApplication from '../../application/avatar-usecase/avatar-usecase';
import IPasswordService from '../../domain/services/password-service/password-service';
import ISecurityService from '../../domain/services/security-service/security-service';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import UserDetailsUsecase from '../../domain/usecases/user-details-usecase/user-details-usecase';
import SocialNetworkUsecase from '../../domain/usecases/social-newtork-usecase/social-newtork-usecase';
import AuthenticationUsecase from '../../domain/usecases/authentication-usecase/authentication-usecase';
import UserDetailsUsecaseApplication from '../../application/user-details-usecase/user-details-usecase';
import SocialNetworkUsecaseApplication from '../../application/social-network-usecase/social-network-usecase';
import AuthenticationUsecaseApplication from '../../application/authentication-usecase/authentication-usecase';

export type ConfigureUsecases = {
  repository: IUserRepository;
  fileServices: FileServices;
  securityService: ISecurityService;
  passwordService: IPasswordService;
};

export type Usecases = {
  userUsecase: UserUsecase;
  avatarUsecase: AvatarUsecase;
  userDetailsUsecase: UserDetailsUsecase;
  socialNetworkUsecase: SocialNetworkUsecase;
  authenticationUsecase: AuthenticationUsecase;
};

const configureUsecases = ({
  repository,
  fileServices,
  securityService,
  passwordService,
}: ConfigureUsecases): Usecases => {
  try {
    const {
      avatarFileService,
      socialNetworkFileService,
    } = fileServices;

    const userUsecase = new UserUsecaseApplication(
      repository,
      passwordService,
    );

    const avatarUsecase = new AvatarUsecaseApplication(
      avatarFileService,
      repository,
      securityService,
    );

    const userDetailsUsecase = new UserDetailsUsecaseApplication(
      repository,
    );

    const socialNetworkUsecase = new SocialNetworkUsecaseApplication(
      socialNetworkFileService,
      repository,
      securityService,
    );

    const authenticationUsecase = new AuthenticationUsecaseApplication(
      repository,
      passwordService,
    );

    return {
      userUsecase,
      avatarUsecase,
      userDetailsUsecase,
      socialNetworkUsecase,
      authenticationUsecase,
    };
  } catch (e) {
    throw new Error(`An error occurred while configuring usecases. ${(e as Error).message}`);
  }
};

export default configureUsecases;
