import {
  UpdateUser,
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import IPasswordService from '../../services/password-service/password-service';
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
   * @param {IPasswordService} passwordService - The password service.
   */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly passwordService: IPasswordService,
  ) {}

  /**
   * Retrieves the detailed secure user entity.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract getUser: ()
  => Promise<DetailedSecureUser>;

  /**
   * Updates the information of the detailed secure user entity.
   * @authentication Requires authentication to access this method.
   * @param {UpdateUser} payload - The data to update the user with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract updateUser: (payload: UpdateUser)
  => Promise<DetailedSecureUser>;
}

export default UserUsecase;
