import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  User,
  CreateUser,
  PartialUser,
} from '../../entities/user-entity/user-entities';

interface IUserRepositoryReader {
  /**
  * Retrieves a user based on the provided filters.
  * @param {UserRepositoryFilters} [filters] - Optional filters for retrieving the user.
  * @returns {Promise<User | null>} A promise with the retrieved user or null if not found.
  */
  getUser: (filters?: UserRepositoryFilters)
  => Promise<User | null>;

  /**
  * Retrieves multiple users based on the provided filters.
  * @param {UserRepositoryFilters} [filters] - Optional filters for retrieving the users.
  * @returns {Promise<User[]>} A promise with an array of retrieved users.
  */
  getUsers: (filters?: UserRepositoryFilters)
  => Promise<User[]>;
}

interface IUserRepositoryWriter {
  /**
  * Creates a user with the provided payload.
  * @param {CreateUser} payload - The payload for creating the user.
  * @returns {Promise<User>} A promise that resolves with the created user.
  */
  createUser: (payload: CreateUser)
  => Promise<User>;

  /**
  * Updates a user with the provided partial payload and filters.
  * @param {PartialUser} payload - The partial payload for updating the user.
  * @param {UserRepositoryFilters} [filters] - Optional filters for updating the user.
  * @returns {Promise<User | null>} A promise with the updated user or null if not found.
  */
  updateUser: (payload: PartialUser, filters?: UserRepositoryFilters)
  => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
