import {
  UserEntity,
  CreateUserEntity,
  UpdateUserEntity,
} from '../entities/user/user-entity';

interface IUserRepositoryReader {
  getUsers: () => Promise<UserEntity[]>;
  getUserByUserId: (userId: string) => Promise<UserEntity | null>;
  getUserByUsername: (username: string) => Promise<UserEntity | null>;
}

interface IUserRepositoryWriter {
  createUser: (payload: CreateUserEntity) => Promise<UserEntity>;
  updateUserByUsername: (username: string, payload: UpdateUserEntity) => Promise<UserEntity | null>;
}

interface IUserRepository extends
  IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
