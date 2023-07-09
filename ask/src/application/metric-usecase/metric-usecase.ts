import {
  UserNotFoundError,
  UserUpdateFailedError,
} from '../../domain/entities/user/user-errors';
import {
  User,
} from '../../domain/entities/user/user-entities';
import MetricUsecase from '../../domain/usecases/metric-usecase/metric-usecase';

class MetricUsecaseApplication extends MetricUsecase {
  increaseTotalViewsByUsername = async (username: string): Promise<User> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      userId: user.userId,
      username: user.username,
      metrics: {
        totalViews: user.metrics.totalViews + 1,
        totalAnswers: user.metrics.totalAnswers,
        totalQuestions: user.metrics.totalQuestions,
      },
    }, { username });
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };

  increaseTotalAnswersByUsername = async (username: string): Promise<User> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      userId: user.userId,
      username: user.username,
      metrics: {
        totalViews: user.metrics.totalViews,
        totalAnswers: user.metrics.totalAnswers + 1,
        totalQuestions: user.metrics.totalQuestions,
      },
    }, { username });
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };

  decreaseTotalAnswersByUsername = async (username: string): Promise<User> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      userId: user.userId,
      username: user.username,
      metrics: {
        totalViews: user.metrics.totalViews,
        totalAnswers: user.metrics.totalAnswers - 1,
        totalQuestions: user.metrics.totalQuestions,
      },
    }, { username });
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };

  decreaseTotalQuestionsByUsername = async (username: string): Promise<User> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      userId: user.userId,
      username: user.username,
      metrics: {
        totalViews: user.metrics.totalViews,
        totalAnswers: user.metrics.totalAnswers,
        totalQuestions: user.metrics.totalQuestions - 1,
      },
    }, { username });
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };

  increaseTotalQuestionsByUsername = async (username: string): Promise<User> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      userId: user.userId,
      username: user.username,
      metrics: {
        totalViews: user.metrics.totalViews,
        totalAnswers: user.metrics.totalAnswers,
        totalQuestions: user.metrics.totalQuestions + 1,
      },
    }, { username });
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };
}

export default MetricUsecaseApplication;
