import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  BasicUser,
  CreateBasicUser,
  PartialBasicUser,
} from '../../entities/user-entity/user-entities';

/**
 * Represents a reader interface for accessing user data in a repository.
 * @interface
 */
interface IUserRepositoryReader {
  /**
   * Retrieves a user with optional filters.
   * @param {UserRepositoryFilters} [filters] - Optional filters to apply.
   * @returns {Promise<BasicUser | null>} A promise with the basic user if found.
   */
  getUser: (filters?: UserRepositoryFilters)
  => Promise<BasicUser | null>;

  /**
   * Retrieves a list of users with optional filters.
   * @param {UserRepositoryFilters} [filters] - Optional filters to apply.
   * @returns {Promise<BasicUser[]>} A promise with an array of basic users.
   */
  getUsers: (filters?: UserRepositoryFilters)
  => Promise<BasicUser[]>;
}

/**
 * Represents a writer interface for managing user data in a repository.
 * @interface
 */
interface IUserRepositoryWriter {
  /**
   * Creates a new basic user.
   * @param {CreateBasicUser} payload - The payload for creating the basic user.
   * @returns {Promise<BasicUser>} A promise resolving to the created basic user.
   */
  createUser: (payload: CreateBasicUser)
  => Promise<BasicUser>;

  /**
   * Updates a user with optional filters.
   * @param {PartialBasicUser} payload - The partial data to update the user with.
   * @param {UserRepositoryFilters} [filters] - Optional filters to apply.
   * @returns {Promise<BasicUser | null>} A promise with the updated basic user if found.
   */
  updateUser: (payload: PartialBasicUser, filters?: UserRepositoryFilters)
  => Promise<BasicUser | null>;
}

/**
 * Represents a combined user repository interface, combining both reader and writer capabilities.
 * @interface
 * @extends {IUserRepositoryReader}
 * @extends {IUserRepositoryWriter}
 */
interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
