import {
  DetailedUser,
  CreateDetailedUser,
  PartialDetailedUser,
} from '../../entities/user-entity/user-entities';
import IAvatarRepository from '../avatar-repository/avatar-repository';
import ISocialNetworkRepository from '../social-network-repository/social-network-repository';

/**
 * Represents a reader interface for accessing user data in a repository.
 * @interface
 */
interface IUserRepositoryReader {
  /**
   * Retrieves the detailed user.
   * @returns {Promise<DetailedUser | null>} A promise with the detailed user if found.
   */
  getUser: ()
  => Promise<DetailedUser | null>
}

/**
 * Represents a writer interface for managing user data in a repository.
 * @interface
 */
interface IUserRepositoryWriter {
  /**
   * Creates a new detailed user.
   * @param {CreateDetailedUser} payload - The payload for creating the detailed user.
   * @returns {Promise<DetailedUser>} A promise with the created detailed user.
   */
  createUser: (payload: CreateDetailedUser)
  => Promise<DetailedUser>;

  /**
   * Updates the detailed user.
   * @param {PartialDetailedUser} payload - The partial data to update the user with.
   * @returns {Promise<DetailedUser | null>} A promise with the updated detailed user if found.
   */
  updateUser: (payload: PartialDetailedUser)
  => Promise<DetailedUser | null>;
}

/**
 * Represents a combined user repository interface, combining both reader and writer capabilities.
 * @interface
 * @extends {IUserRepositoryReader}
 * @extends {IUserRepositoryWriter}
 * @extends {ISocialNetworkRepository}
 */
interface IUserRepository extends
  IAvatarRepository,
  ISocialNetworkRepository,
  IUserRepositoryReader,
  IUserRepositoryWriter {}

export default IUserRepository;
