import {
  SecureUser,
  CreateUser,
  UserCredentials,
} from '../../entities/user-entity/user-entities';
import SecurityService from '../../services/security-service';
import IUserRepository from '../../repositories/user-repository/user-repository';

abstract class AuthenticationUsecase {
  /**
  * Creates an instance of UserUsecase.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {SecurityService} securityService - The security service for cryptographic operations.
  */
  constructor(
    protected userRepository: IUserRepository,
    protected securityService: SecurityService,
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
