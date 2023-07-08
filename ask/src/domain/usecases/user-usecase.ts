import {
  User,
  CreateUser,
  UpdateUser,
} from '../entities/user/user-entities';
import IUserRepository from '../repositories/user/user-repository';

abstract class UserUsecase {
  constructor(protected readonly userRepository: IUserRepository) {}

  abstract createUser: (payload: CreateUser) => Promise<User>;

  abstract getUserByUsername: (username: string) => Promise<User>;

  abstract updateUserByUserId: (id: string, payload: UpdateUser) => Promise<User>;
}

export default UserUsecase;
