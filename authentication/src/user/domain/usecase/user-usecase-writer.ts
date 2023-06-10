import { CreateUserEntity } from '../entities/create-user-entity';
import { SmallUserEntity } from '../entities/small-user-entity';

export interface UserUsecaseWriter {
  createUser: (userPayload: CreateUserEntity) => Promise<SmallUserEntity>;
}
