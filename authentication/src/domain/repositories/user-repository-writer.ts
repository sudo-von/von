import { CreateUserEntity } from '../entities/create-user-entity';
import { UserEntity } from '../entities/user-entity';

interface IUserRepositoryWriter {
  createUser: (userPayload: CreateUserEntity) => Promise<UserEntity | null>;
}

export default IUserRepositoryWriter;
