import {
  CreateUser,
  UserCredentials,
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import IPasswordService from '../../services/password-service/password-service';
import IUserRepository from '../../repositories/user-repository/user-repository';

/**
 * Abstract class representing an authentication use case.
 * @abstract
 */
abstract class AuthenticationUsecase {
  /**
   * Creates an instance of AuthenticationUsecase.
   * @constructor
   * @param {IUserRepository} userRepository - The user repository.
   * @param {IPasswordService} passwordService - The password service.
   */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly passwordService: IPasswordService,
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
