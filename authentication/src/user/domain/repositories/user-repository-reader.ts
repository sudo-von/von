import { UserEntity } from '../entities/user-entity';

export interface UserRepositoryReader {
  getUsers: () => Promise<UserEntity[] | null>;
  getUserById: (id: string) => Promise<UserEntity | null>;
  getUserByEmail: (email: string) => Promise<UserEntity | null>;
}
