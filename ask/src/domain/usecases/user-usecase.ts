import {
  User,
  CreateUser,
  UpdateUser,
} from '../entities/user/user-entities';
import IUserRepository from '../repositories/user-repository';

abstract class UserUsecase {
  constructor(protected userRepository: IUserRepository) {}

  abstract createUser: (payload: CreateUser) => Promise<User>;

  abstract updateUserByUsername: (username: string, payload: UpdateUser) => Promise<User>;
}

export default UserUsecase;
