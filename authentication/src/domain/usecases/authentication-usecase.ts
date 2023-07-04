import {
  CreateUserEntity,
  RestrictedUserEntity,
  UserCredentialsEntity,
} from '../entities/user/user-entity';
import FileService from '../services/file-service';
import SecurityService from '../services/security-service';
import IUserRepository from '../repositories/user-repository';

abstract class AuthenticationUsecase {
  constructor(
    protected fileService: FileService,
    protected userRepository: IUserRepository,
    protected securityService: SecurityService,
  ) {}

  abstract signup: (payload: CreateUserEntity) => Promise<RestrictedUserEntity>;

  abstract authenticate: (credentials: UserCredentialsEntity) => Promise<RestrictedUserEntity>;
}

export default AuthenticationUsecase;
