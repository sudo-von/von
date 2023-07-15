import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  User,
  CreateUser,
} from '../../entities/user-entity/user-entities';

interface IUserRepositoryReader {
  getUser: (filters?: UserRepositoryFilters)
  => Promise<User | null>

  getUsers: (filters?: UserRepositoryFilters)
  => Promise<User[]>;
}

interface IUserRepositoryWriter {
  createUser: (payload: CreateUser)
  => Promise<User>;

  updateUser: (payload: Partial<User>, filters?: UserRepositoryFilters)
  => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
