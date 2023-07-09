import {
  User,
} from '../../entities/user/user-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';

abstract class MetricUsecase {
  constructor(protected readonly userRepository: IUserRepository) {}

  abstract increaseTotalViewsByUsername: (username: string) => Promise<User>;

  abstract increaseTotalAnswersByUsername: (username: string) => Promise<User>;

  abstract decreaseTotalAnswersByUsername: (username: string) => Promise<User>;

  abstract decreaseTotalQuestionsByUsername: (username: string) => Promise<User>;

  abstract increaseTotalQuestionsByUsername: (username: string) => Promise<User>;
}

export default MetricUsecase;
