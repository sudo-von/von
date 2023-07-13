import {
  User,
  CreateUserWithMetrics,
  PartialUserWithMetrics,
} from '../../entities/user-entity/user-entities';
import {
  UserRepositoryFilters,
} from './user-repository-filters';

interface IUserRepositoryReader {
  getUsers: (filters?: UserRepositoryFilters)
  => Promise<User[]>;

  getUser: (filters?: UserRepositoryFilters)
  => Promise<User | null>;
}

interface IUserRepositoryWriter {
  createUser: (payload: CreateUserWithMetrics)
  => Promise<User>;

  updateUser: (payload: PartialUserWithMetrics, filters?: UserRepositoryFilters)
  => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
