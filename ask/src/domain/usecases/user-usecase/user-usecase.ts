import {
  CreateUser,
  UpdateUser,
  DetailedUser,
} from '@entities/user-entity/user-entities';
import IUserRepository from '@repositories/user-repository/user-repository';
import IQuestionRepository from '@repositories/question-repository/question-repository';

abstract class UserUsecase {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly questionRepository: IQuestionRepository,
  ) {}

  abstract getUserByUserId: (id: string)
  => Promise<DetailedUser>;

  abstract createUser: (payload: CreateUser)
  => Promise<DetailedUser>;

  abstract updateUserByUserId: (id: string, payload: UpdateUser)
  => Promise<DetailedUser>;
}

export default UserUsecase;
