import {
  UpdateUser,
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import {
  IPasswordManagerServiceReader,
} from '../../services/password-manager-service/password-manager-service';
import IUserRepository from '../../repositories/user-repository/user-repository';

/**
 * Abstract class representing a user use case.
 * @abstract
 */
abstract class UserUsecase {
  /**
   * Creates an instance of UserUsecase.
   * @constructor
   * @param {IUserRepository} userRepository - The user repository.
   * @param {IPasswordManagerServiceReader} passwordManagerService - The password manager service.
   */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly passwordManagerService: IPasswordManagerServiceReader,
  ) {}

  /**
   * Abstract method to retrieve a detailed secure user by username.
   * @param {string} username - The username of the user to retrieve.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract getUserByUsername: (username: string)
  => Promise<DetailedSecureUser>;

  /**
   * Abstract method to update a user's information by username.
   * @authentication Requires authentication to access this method.
   * @param {string} username - The username of the user to update.
   * @param {UpdateUser} payload - The data to update the user with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract updateUserByUsername: (username: string, payload: UpdateUser)
  => Promise<DetailedSecureUser>;
}

export default UserUsecase;
