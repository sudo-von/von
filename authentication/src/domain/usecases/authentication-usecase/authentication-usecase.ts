import {
  SecureUser,
  UserCredentials,
  CreateUserWithFile,
} from '../../entities/user-entity/user-entities';
import FileService from '../../services/file-service';
import SecurityService from '../../services/security-service';
import IUserRepository from '../../repositories/user-repository/user-repository';

abstract class AuthenticationUsecase {
  constructor(
    protected fileService: FileService,
    protected userRepository: IUserRepository,
    protected securityService: SecurityService,
  ) {}

  abstract login: (credentials: UserCredentials)
  => Promise<SecureUser>;

  abstract signup: (payload: CreateUserWithFile)
  => Promise<SecureUser>;
}

export default AuthenticationUsecase;
