import { UserEntity } from '../entities/user-entity';

export interface UserUsecaseReader {
  getUserByUsername: (username: string) => Promise<UserEntity>;
}
