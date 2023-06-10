import { CreateUserEntity, UserEntity } from '../entities/user-entity';

interface IUserRepositoryWriter {
  createUser: (userPayload: CreateUserEntity) => Promise<UserEntity | null>;
}

export default IUserRepositoryWriter;
