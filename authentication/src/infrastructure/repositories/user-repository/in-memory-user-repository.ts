import crypto from 'crypto';
import IUserRepository from '../../../domain/repositories/user-repository';
import { CreateUserEntity, UserEntity } from '../../../domain/entities/user-entity';

class InMemoryUserRepository implements IUserRepository {
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

  createUser = async (payload: CreateUserEntity): Promise<UserEntity | null> => {
    const user: UserEntity = {
      ...payload,
      id: crypto.randomBytes(8).toString('hex'),
    };
    this.usersInMemory.push(user);
    return user;
  };
}

export default InMemoryUserRepository;
