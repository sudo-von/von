import { v4 } from 'uuid';
import { CreateUserEntity, UserEntity } from '../../../domain/entities/user-entity';
import IUserRepository from '../../../domain/repositories/user-repository';

class InMemoryRepository implements IUserRepository {
  private usersInMemory: UserEntity[] = [];

  getUsers = async (): Promise<UserEntity[]> => this.usersInMemory;

  getUserById = async (id: string): Promise<UserEntity | null> => {
    const user = this.usersInMemory.find((u) => u.id === id) || null;
    return user;
  };

  getUserByEmail = async (email: string): Promise<UserEntity | null> => {
    const user = this.usersInMemory.find((u) => u.email === email) || null;
    return user;
  };

  getUserByUsername = async (username: string): Promise<UserEntity | null> => {
    const user = this.usersInMemory.find((u) => u.username === username) || null;
    return user;
  };

  createUser = async (userPayload: CreateUserEntity): Promise<UserEntity | null> => {
    const user: UserEntity = {
      ...userPayload,
      id: v4(),
    };
    this.usersInMemory.push(user);
    return user;
  };
}

export default InMemoryRepository;
