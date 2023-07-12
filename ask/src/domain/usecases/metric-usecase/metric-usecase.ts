import {
  User,
} from '@entities/user-entity/user-entities';
import IUserRepository from '@repositories/user-repository/user-repository';

abstract class MetricUsecase {
  constructor(protected readonly userRepository: IUserRepository) {}

  abstract increaseTotalViewsByUsername: (username: string)
  => Promise<User>;
}

export default MetricUsecase;
