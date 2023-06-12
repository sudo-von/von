import { CreateUserEntity, UserEntity } from '../entities/user-entity';

interface IUserRepositoryReader {
  getUsers: () => Promise<UserEntity[]>;
  getUserById: (id: string) => Promise<UserEntity | null>;
  getUserByEmail: (email: string) => Promise<UserEntity | null>;
  getUserByUsername: (username: string) => Promise<UserEntity | null>;
}

interface IUserRepositoryWriter {
  createUser: (userPayload: CreateUserEntity) => Promise<UserEntity | null>;
}

interface IUserRepository extends IUserRepositoryReader, IUserRepositoryWriter {}

export default IUserRepository;
