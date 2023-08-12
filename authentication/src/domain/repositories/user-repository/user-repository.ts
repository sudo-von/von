import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  DetailedUser,
  CreateDetailedUser,
  PartialDetailedUser,
} from '../../entities/user-entity/user-entities';
import ISocialNetworkRepository from '../social-network-repository/social-network-repository';

/**
 * Represents a reader interface for accessing user data in a repository.
 * @interface
 */
interface IUserRepositoryReader {
  /**
   * Retrieves a user with optional filters.
   * @param {UserRepositoryFilters} [filters] - Optional filters to apply.
   * @returns {Promise<DetailedUser | null>} A promise with the detailed user if found.
   */
  getUser: (filters?: UserRepositoryFilters)
  => Promise<DetailedUser | null>

  /**
   * Retrieves a list of users with optional filters.
   * @param {UserRepositoryFilters} [filters] - Optional filters to apply.
   * @returns {Promise<DetailedUser[]>} A promise with an array of detailed users.
   */
  getUsers: (filters?: UserRepositoryFilters)
  => Promise<DetailedUser[]>;
}

/**
 * Represents a writer interface for managing user data in a repository.
 * @interface
 */
interface IUserRepositoryWriter {
  /**
   * Creates a new detailed user.
   * @param {CreateDetailedUser} payload - The payload for creating the detailed user.
   * @returns {Promise<DetailedUser>} A promise resolving to the created detailed user.
   */
  createUser: (payload: CreateDetailedUser)
  => Promise<DetailedUser>;

  /**
   * Updates a user with optional filters.
   * @param {PartialDetailedUser} payload - The partial data to update the user with.
   * @param {UserRepositoryFilters} [filters] - Optional filters to apply.
   * @returns {Promise<DetailedUser | null>} A promise with the updated detailed user if found.
   */
  updateUser: (payload: PartialDetailedUser, filters?: UserRepositoryFilters)
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
  IUserRepositoryReader,
  IUserRepositoryWriter,
  ISocialNetworkRepository {}

export default IUserRepository;
