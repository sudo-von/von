import {
  UserEntity,
  CreateUserEntity,
  UpdateUserEntity,
} from '../entities/user-entity';

interface IUserRepositoryReader {
  getUsers: () => Promise<UserEntity[]>;
  getUserByEmail: (email: string) => Promise<UserEntity | null>;
  getUserByUsername: (username: string) => Promise<UserEntity | null>;
}

interface IUserRepositoryWriter {
  createUser: (payload: CreateUserEntity) => Promise<UserEntity>;
  updateUserByUsername: (username: string, payload: UpdateUserEntity) => Promise<UserEntity | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
