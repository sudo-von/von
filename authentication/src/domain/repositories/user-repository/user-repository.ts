import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  User,
  CreateUser,
} from '../../entities/user-entity/user-entities';

interface IUserRepositoryReader {
  /**
  * Retrieves a user based on optional filters.
  * @param {UserRepositoryFilters} [filters] - Optional filters to apply to the query.
  * @returns {Promise<User | null>} A promise with the retrieved user or null if not found.
  */
  getUser: (filters?: UserRepositoryFilters)
  => Promise<User | null>

  /**
  * Retrieves a list of users based on optional filters.
  * @param {UserRepositoryFilters} [filters] - Optional filters to apply to the query.
  * @returns {Promise<User[]>} A promise with the array of retrieved users.
  */
  getUsers: (filters?: UserRepositoryFilters)
  => Promise<User[]>;
}

interface IUserRepositoryWriter {
  /**
  * Creates a new user.
  * @param {CreateUser} payload - The payload containing the user information.
  * @returns {Promise<User>} A promise with the created user.
  */
  createUser: (payload: CreateUser)
  => Promise<User>;

  /**
  * Updates a user based on partial data and optional filters.
  * @param {Partial<User>} payload - The partial user data to update.
  * @param {UserRepositoryFilters} [filters] - Optional filters to apply to the query.
  * @returns {Promise<User | null>} A promise with the updated user or null if not found.
  */
  updateUser: (payload: Partial<User>, filters?: UserRepositoryFilters)
  => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
