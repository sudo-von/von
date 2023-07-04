import {
  User,
  UserPayload,
} from '../entities/user/user-entities';

interface IUserRepositoryReader {
  getUsers: () => Promise<User[]>;
  getUserById: (id: string) => Promise<User | null>;
  getUserByEmail: (email: string) => Promise<User | null>;
  getUserByUsername: (username: string) => Promise<User | null>;
}

interface IUserRepositoryWriter {
  createUser: (payload: UserPayload) => Promise<User>;
  updateUserByUsername: (username: string, payload: UserPayload) => Promise<User | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
