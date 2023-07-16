import {
  SecureUser,
  CreateUser,
  UserCredentials,
} from '../../entities/user-entity/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IPasswordManagerService from '../../services/password-manager-service/password-manager-service';

abstract class AuthenticationUsecase {
  /**
  * Creates an instance of AuthenticationUsecase.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {IPasswordManagerService} passwordManagerService - The password manager service.
  */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly passwordManagerService: IPasswordManagerService,
  ) {}

  /**
  * Creates a new user account with the provided payload.
  * @param payload The user object for account creation.
  * @returns A promise with the secure user object.
  */
  abstract signup: (payload: CreateUser)
  => Promise<SecureUser>;

  /**
  * Authenticates a user with the provided credentials.
  * @param credentials The user credentials for authentication.
  * @returns A promise with the secure user object.
  */
  abstract login: (credentials: UserCredentials)
  => Promise<SecureUser>;
}

export default AuthenticationUsecase;
