import {
  UserNotFoundError,
  UserUpdateFailedError,
} from '../../domain/entities/user-entity/user-errors';
import {
  User,
} from '../../domain/entities/user-entity/user-entities';
import MetricUsecase from '../../domain/usecases/metric-usecase/metric-usecase';

class MetricUsecaseApplication extends MetricUsecase {
  increaseTotalViewsByUsername = async (
    username: string,
  ): Promise<User> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      userId: user.userId,
      username: user.username,
      metrics: {
        totalViews: user.metrics.totalViews + 1,
      },
    }, { username });
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };
}

export default MetricUsecaseApplication;
