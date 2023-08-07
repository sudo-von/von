import {
  CreateUser,
  UserCredentials,
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IPasswordManagerService from '../../services/password-manager-service/password-manager-service';

abstract class AuthenticationUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly passwordManagerService: IPasswordManagerService,
  ) {}

  abstract signup: (payload: CreateUser)
  => Promise<DetailedSecureUser>;

  abstract login: (credentials: UserCredentials)
  => Promise<DetailedSecureUser>;
}

export default AuthenticationUsecase;
