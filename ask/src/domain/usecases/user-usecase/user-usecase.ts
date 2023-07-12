import {
  User,
  CreateUser,
  UpdateUser,
} from '@entities/user-entity/user-entities';
import IUserRepository from '@repositories/user-repository/user-repository';
import IQuestionRepository from '@repositories/question-repository/question-repository';

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
