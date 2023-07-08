import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
} from '../domain/entities/user/user-errors';
import {
  User,
  CreateUser,
  UpdateUser,
} from '../domain/entities/user/user-entities';
import UserUsecase from '../domain/usecases/user-usecase';
import validateUserUpdate from '../domain/entities/user/validations/update-user-validations';
import validateUserCreation from '../domain/entities/user/validations/create-user-validations';

class UserUsecaseApplication extends UserUsecase {
  createUser = async (payload: CreateUser): Promise<User> => {
    validateUserCreation(payload);

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const createdUser = await this.userRepository.createUser({
      userId: payload.userId,
      username: payload.username,
      metrics: {
        totalViews: 0,
        totalAnswers: 0,
        totalQuestions: 0,
      },
    });

    return createdUser;
  };

  getUserByUsername = async (username: string): Promise<User> => {
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    return userFoundByUsername;
  };

  increaseTotalViewsByUsername = async (username: string): Promise<User> => {
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const increasedViewsUser = await this.userRepository.updateUser({
      userId: userFoundByUsername.userId,
      username: userFoundByUsername.username,
      metrics: {
        totalViews: userFoundByUsername.metrics.totalViews + 1,
        totalAnswers: userFoundByUsername.metrics.totalAnswers,
        totalQuestions: userFoundByUsername.metrics.totalQuestions,
      },
    }, { username });
    if (!increasedViewsUser) throw UserUpdateFailedError;

    return increasedViewsUser;
  };

  decreaseTotalAnswersByUsername = async (username: string): Promise<User> => {
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const decreasedAnswersUser = await this.userRepository.updateUser({
      userId: userFoundByUsername.userId,
      username: userFoundByUsername.username,
      metrics: {
        totalViews: userFoundByUsername.metrics.totalViews,
        totalAnswers: userFoundByUsername.metrics.totalAnswers - 1,
        totalQuestions: userFoundByUsername.metrics.totalQuestions,
      },
    }, { username });
    if (!decreasedAnswersUser) throw UserUpdateFailedError;

    return decreasedAnswersUser;
  };

  increaseTotalAnswersByUsername = async (username: string): Promise<User> => {
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const increasedAnswersUser = await this.userRepository.updateUser({
      userId: userFoundByUsername.userId,
      username: userFoundByUsername.username,
      metrics: {
        totalViews: userFoundByUsername.metrics.totalViews,
        totalAnswers: userFoundByUsername.metrics.totalAnswers + 1,
        totalQuestions: userFoundByUsername.metrics.totalQuestions,
      },
    }, { username });
    if (!increasedAnswersUser) throw UserUpdateFailedError;

    return increasedAnswersUser;
  };

  decreaseTotalQuestionsByUsername = async (username: string): Promise<User> => {
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const decreasedQuestionsUser = await this.userRepository.updateUser({
      userId: userFoundByUsername.userId,
      username: userFoundByUsername.username,
      metrics: {
        totalViews: userFoundByUsername.metrics.totalViews,
        totalAnswers: userFoundByUsername.metrics.totalAnswers,
        totalQuestions: userFoundByUsername.metrics.totalQuestions - 1,
      },
    }, { username });
    if (!decreasedQuestionsUser) throw UserUpdateFailedError;

    return decreasedQuestionsUser;
  };

  increaseTotalQuestionsByUsername = async (username: string): Promise<User> => {
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const increasedQuestionsUser = await this.userRepository.updateUser({
      userId: userFoundByUsername.userId,
      username: userFoundByUsername.username,
      metrics: {
        totalViews: userFoundByUsername.metrics.totalViews,
        totalAnswers: userFoundByUsername.metrics.totalAnswers,
        totalQuestions: userFoundByUsername.metrics.totalQuestions + 1,
      },
    }, { username });
    if (!increasedQuestionsUser) throw UserUpdateFailedError;

    return increasedQuestionsUser;
  };

  updateUserByUsername = async (username: string, payload: UpdateUser): Promise<User> => {
    validateUserUpdate(payload);

    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      userId: payload.userId,
      username: payload.username,
      metrics: {
        totalViews: userFoundByUsername.metrics.totalViews,
        totalAnswers: userFoundByUsername.metrics.totalAnswers,
        totalQuestions: userFoundByUsername.metrics.totalQuestions,
      },
    }, { username });
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };
}

export default UserUsecaseApplication;
