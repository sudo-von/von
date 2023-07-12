import {
  BasicUser,
  CreateBasicUser,
  UpdateBasicUser,
} from '@entities/user-entity/user-entities';
import {
  UserRepositoryFilters,
} from '@repositories/user-repository/user-repository-filters';

interface IUserRepositoryReader {
  getUsers: (filters?: UserRepositoryFilters) => Promise<BasicUser[]>;
  getUser: (filters?: UserRepositoryFilters) => Promise<BasicUser | null>;
}

interface IUserRepositoryWriter {
  createUser: (
    payload: CreateBasicUser
  ) => Promise<BasicUser>;
  updateUser: (
    payload: UpdateBasicUser,
    filters?: UserRepositoryFilters
  ) => Promise<BasicUser | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
