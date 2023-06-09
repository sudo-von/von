import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  User,
  CreateUserWithMetrics,
  PartialUserWithMetrics,
} from '../../entities/user-entity/user-entities';

interface IUserRepositoryReader {
  getUser: (filters?: UserRepositoryFilters)
  => Promise<User | null>;

  getUsers: (filters?: UserRepositoryFilters)
  => Promise<User[]>;
}

interface IUserRepositoryWriter {
  createUser: (payload: CreateUserWithMetrics)
  => Promise<User>;

  updateUser: (payload: PartialUserWithMetrics, filters?: UserRepositoryFilters)
  => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
