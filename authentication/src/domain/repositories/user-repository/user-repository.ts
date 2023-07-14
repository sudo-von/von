import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  User,
  CreateUser,
  UpdateUser,
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

  updateUser: (payload: UpdateUser, filters?: UserRepositoryFilters)
  => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
