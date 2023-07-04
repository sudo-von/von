import {
  CreateUser,
  RestrictedUser,
  UserCredentials,
} from '../entities/user/user-entities';
import FileService from '../services/file-service';
import SecurityService from '../services/security-service';
import IUserRepository from '../repositories/user-repository';

abstract class AuthenticationUsecase {
  constructor(
    protected fileService: FileService,
    protected userRepository: IUserRepository,
    protected securityService: SecurityService,
  ) {}

  abstract signup: (payload: CreateUser) => Promise<RestrictedUser>;

  abstract authenticate: (userCredentials: UserCredentials) => Promise<RestrictedUser>;
}

export default AuthenticationUsecase;
