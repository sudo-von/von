import { CreateUserEntity } from '../entities/create-user-entity';
import { UserEntity } from '../entities/user-entity';

export interface UserRepositoryWriter {
  createUser: (userPayload: CreateUserEntity) => Promise<UserEntity | null>;
}
