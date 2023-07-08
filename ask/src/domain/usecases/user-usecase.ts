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

  abstract increaseTotalViewsByUsername: (username: string) => Promise<User>;

  abstract decreaseTotalAnswersByUsername: (username: string) => Promise<User>;

  abstract increaseTotalAnswersByUsername: (username: string) => Promise<User>;

  abstract decreaseTotalQuestionsByUsername: (username: string) => Promise<User>;

  abstract increaseTotalQuestionsByUsername: (username: string) => Promise<User>;

  abstract updateUserByUsername: (username: string, payload: UpdateUser) => Promise<User>;
}

export default UserUsecase;
