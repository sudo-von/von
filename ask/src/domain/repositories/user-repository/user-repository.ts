import {
  User,
  CreateDetailedUser,
  UpdateUser,
} from '@entities/user-entity/user-entities';
import {
  UserRepositoryFilters,
} from '@repositories/user-repository/user-repository-filters';

interface IUserRepositoryReader {
  getUsers: (filters?: UserRepositoryFilters) => Promise<User[]>;
  getUser: (filters?: UserRepositoryFilters) => Promise<User | null>;
}

interface IUserRepositoryWriter {
  createUser: (
    payload: CreateDetailedUser
  ) => Promise<User>;
  updateUser: (
    payload: UpdateUser,
    filters?: UserRepositoryFilters
  ) => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
