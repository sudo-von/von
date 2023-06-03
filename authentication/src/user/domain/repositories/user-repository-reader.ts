import { UserEntity } from '../entities/user-entity';

export interface UserRepositoryReader {
  getUserById: (id: string) => Promise<UserEntity | null>;
  getUserByEmail: (email: string) => Promise<UserEntity | null>;
}
