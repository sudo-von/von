import crypto from 'crypto';
import IUserRepository from '../../../domain/repositories/user-repository';
import { CreateUserEntity, UpdateUserEntity, UserEntity } from '../../../domain/entities/user-entity';

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
    const userEntity: UserEntity = {
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password,
      profilePicture: payload.profilePicture,
      about: {
        interest: payload.about.interest,
        position: payload.about.position,
        quote: payload.about.quote,
      },
      id: crypto.randomBytes(8).toString('hex'),
    };
    this.usersInMemory.push(userEntity);
    return userEntity;
  };

  updateUserById = async (id: string, payload: UpdateUserEntity): Promise<UserEntity | null> => {
    const userEntity: UserEntity = {
      id,
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password,
      profilePicture: payload.profilePicture,
      about: {
        interest: payload.about.interest,
        position: payload.about.position,
        quote: payload.about.quote,
      },
    };
    this.usersInMemory = this.usersInMemory.map((user) => {
      if (user.id !== id) return user;
      return userEntity;
    });
    return userEntity;
  };
}

export default InMemoryUserRepository;
