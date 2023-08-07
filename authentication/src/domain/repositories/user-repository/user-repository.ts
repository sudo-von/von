import {
  UserRepositoryFilters,
} from './user-repository-filters';
import {
  DetailedUser,
  CreateDetailedUser,
  PartialDetailedUser,
} from '../../entities/user-entity/user-entities';

interface IUserRepositoryReader {
  getUser: (filters?: UserRepositoryFilters)
  => Promise<DetailedUser | null>

  getUsers: (filters?: UserRepositoryFilters)
  => Promise<DetailedUser[]>;
}

interface IUserRepositoryWriter {
  createUser: (payload: CreateDetailedUser)
  => Promise<DetailedUser>;

  updateUser: (payload: PartialDetailedUser, filters?: UserRepositoryFilters)
  => Promise<DetailedUser | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
