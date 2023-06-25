import { CreateUserEntity, UpdateUserEntity, UserEntity } from '../entities/user-entity';

export interface IUserRepositoryReader {
  getUsers: () => Promise<UserEntity[]>;
  getUserByUsername: (username: string) => Promise<UserEntity | null>;
}

interface IUserRepositoryWriter {
  createUser: (payload: CreateUserEntity) => Promise<UserEntity>;
  updateUserByUsername: (username: string, payload: UpdateUserEntity) => Promise<UserEntity | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
