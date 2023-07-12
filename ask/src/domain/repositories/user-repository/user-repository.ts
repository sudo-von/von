import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  UserRepository,
  CreateUserRepository,
  UpdateUserRepository,
} from './user-repository-entities';

interface IUserRepositoryReader {
  getUsers: (filters?: UserRepositoryFilters) => Promise<UserRepository[]>;
  getUser: (filters?: UserRepositoryFilters) => Promise<UserRepository | null>;
}

interface IUserRepositoryWriter {
  createUser: (
    payload: CreateUserRepository
  ) => Promise<UserRepository>;
  updateUser: (
    payload: UpdateUserRepository,
    filters?: UserRepositoryFilters
  ) => Promise<UserRepository | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
