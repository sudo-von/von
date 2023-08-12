import {
  CreateUser,
  UserCredentials,
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IPasswordManagerService from '../../services/password-manager-service/password-manager-service';

/**
 * Abstract class representing an authentication use case.
 * @abstract
 */
abstract class AuthenticationUsecase {
  /**
   * Creates an instance of AuthenticationUsecase.
   * @constructor
   * @param {IUserRepository} userRepository - The user repository.
   * @param {IPasswordManagerService} passwordManagerService - The password manager service.
   */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly passwordManagerService: IPasswordManagerService,
  ) {}

  /**
   * Abstract method for user signup.
   * @param {CreateUser} payload - The user creation data.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract signup: (payload: CreateUser)
  => Promise<DetailedSecureUser>;

  /**
   * Abstract method for user login.
   * @param {UserCredentials} credentials - The user login credentials.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract login: (credentials: UserCredentials)
  => Promise<DetailedSecureUser>;
}

export default AuthenticationUsecase;
