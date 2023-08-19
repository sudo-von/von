import {
  User,
} from '../../entities/user-entity/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';

/**
 * Abstract class representing a metric use case.
 * @abstract
 */
abstract class MetricUsecase {
  /**
   * Creates an instance of MetricUsecase.
   * @param {IUserRepository} userRepository - The user repository.
   */
  constructor(protected readonly userRepository: IUserRepository) {}

  /**
   * Increases the total views for a user by username.
   * @authentication Requires authentication to access this method.
   * @param {string} username - The username of the user.
   * @returns {Promise<User>} A promise that resolves with the updated user.
   */
  abstract increaseTotalViewsByUsername: (username: string)
  => Promise<User>;
}

export default MetricUsecase;
