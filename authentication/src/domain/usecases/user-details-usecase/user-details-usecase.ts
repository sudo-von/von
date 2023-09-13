import {
  DetailedSecureUser,
} from '../../entities/user-entity/user-entities';
import {
  ReplaceUserDetails,
} from '../../entities/user-details-entity/user-details-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';

/**
 * Abstract class representing a user details use case.
 * @abstract
 */
abstract class UserDetailsUsecase {
  /**
   * Creates an instance of UserDetailsUsecase.
   * @constructor
   * @param {IUserRepository} userRepository - The user repository.
   */
  constructor(protected readonly userRepository: IUserRepository) {}

  /**
   * Replaces the details of the detailed secure user entity.
   * @authentication Requires authentication to access this method.
   * @param {ReplaceUserDetails} payload - The data to replace the user's details with.
   * @returns {Promise<DetailedSecureUser>} A promise with the detailed secure user.
   */
  abstract replaceUserDetails: (payload: ReplaceUserDetails)
  => Promise<DetailedSecureUser>;
}

export default UserDetailsUsecase;
