import { v4 } from 'uuid';
import { CreateUserEntity } from '../../domain/entities/create-user-entity';
import { UserEntity } from '../../domain/entities/user-entity';
import { UserRepository } from '../../domain/repositories/user-repository';

class InMemoryRepositoryImpl implements UserRepository {
  private usersInMemory: UserEntity[] = [];

  getUsers = (): Promise<UserEntity[] | null> => new Promise(
    (resolve) => {
      resolve(this.usersInMemory);
    },
  );

  getUserById = (id: string): Promise<UserEntity | null> => new Promise(
    (resolve) => {
      const user = this.usersInMemory.find((userInMemory) => userInMemory.id === id) || null;
      resolve(user);
    },
  );

  getUserByEmail = (email: string): Promise<UserEntity | null> => new Promise(
    (resolve) => {
      const user = this.usersInMemory.find((userInMemory) => userInMemory.email === email) || null;
      resolve(user);
    },
  );

  createUser = (userPayload: CreateUserEntity): Promise<UserEntity | null> => new Promise(
    (resolve) => {
      const user: UserEntity = {
        ...userPayload,
        id: v4(),
      };
      this.usersInMemory.push(user);
      resolve(user);
    },
  );
}

export default InMemoryRepositoryImpl;
