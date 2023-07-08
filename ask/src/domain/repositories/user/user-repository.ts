import {
  UserFilters,
} from './user-filters';
import {
  User,
  UserPayload,
} from '../../entities/user/user-entities';

interface IUserRepositoryReader {
  getUsers: (filters?: UserFilters) => Promise<User[]>;
  getUser: (filters?: UserFilters) => Promise<User | null>;
}

interface IUserRepositoryWriter {
  createUser: (payload: UserPayload) => Promise<User>;
  updateUserByUsername: (username: string, payload: UserPayload) => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
