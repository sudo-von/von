import { CreateUserEntity } from '../entities/create-user-entity';
import { UserEntity } from '../entities/user-entity';

export interface UserUsecaseWriter {
  createUser: (userPayload: CreateUserEntity) => Promise<UserEntity>;
}
