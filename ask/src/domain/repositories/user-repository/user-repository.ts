import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  User,
  UserPayload,
} from '../../entities/user-entity/user-entities';

interface IUserRepositoryReader {
  getUsers: (filters?: UserRepositoryFilters) => Promise<User[]>;
  getUser: (filters?: UserRepositoryFilters) => Promise<User | null>;
}

interface IUserRepositoryWriter {
  createUser: (
    payload: UserPayload
  ) => Promise<User>;
  updateUser: (
    payload: Partial<UserPayload>,
    filters?: UserRepositoryFilters
  ) => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
