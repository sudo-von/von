import {
  User,
  CreateUser,
  UpdateUser,
} from '../entities/user/user-entities';
import IUserRepository from '../repositories/user/user-repository';
import IQuestionRepository from '../repositories/question/question-repository';

abstract class UserUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract createUser: (payload: CreateUser) => Promise<User>;

  abstract getUserByUsername: (username: string) => Promise<User>;

  abstract updateUserByUserId: (id: string, payload: UpdateUser) => Promise<User>;
}

export default UserUsecase;
