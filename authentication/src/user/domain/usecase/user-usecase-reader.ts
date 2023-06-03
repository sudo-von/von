import { UserEntity } from '../entities/user-entity';

export interface UserUsecaseReader {
  getUserById: (id: string) => Promise<UserEntity>;
}
