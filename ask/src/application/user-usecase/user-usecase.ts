import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
} from '@entities/user-entity/user-errors';
import {
  User,
  CreateUser,
  UpdateUser,
} from '@entities/user-entity/user-entities';
import UserUsecase from '@usecases/user-usecase/user-usecase';
import validateUserUpdate from '@entities/user-entity/user-validations/update-user-validations';
import validateUserCreation from '@entities/user-entity/user-validations/create-user-validations';

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
      },
    });

    const answers = await this.questionRepository.getQuestions({
      username: payload.username,
      status: 'answered',
    });

    const questions = await this.questionRepository.getQuestions({
      username: payload.username,
      status: 'both',
    });

    const user: User = {
      id: createdUser.id,
      userId: createdUser.userId,
      username: createdUser.username,
      metrics: {
        totalAnswers: answers.length,
        totalQuestions: questions.length,
        totalViews: createdUser.metrics.totalViews,
      },
    };

    return user;
  };

  getUserByUsername = async (username: string): Promise<User> => {
    const userFoundByUsername = await this.userRepository.getUser({ username });
    if (!userFoundByUsername) throw UserNotFoundError;

    const answers = await this.questionRepository.getQuestions({
      username,
      status: 'answered',
    });

    const questions = await this.questionRepository.getQuestions({
      username,
      status: 'both',
    });

    const user: User = {
      id: userFoundByUsername.id,
      userId: userFoundByUsername.userId,
      username: userFoundByUsername.username,
      metrics: {
        totalAnswers: answers.length,
        totalQuestions: questions.length,
        totalViews: userFoundByUsername.metrics.totalViews,
      },
    };

    return user;
  };

  updateUserByUserId = async (id: string, payload: UpdateUser): Promise<User> => {
    validateUserUpdate(payload);

    const userFoundByUserId = await this.userRepository.getUser({ userId: id });
    if (!userFoundByUserId) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      userId: userFoundByUserId.id,
      username: payload.username,
      metrics: {
        totalViews: userFoundByUserId.metrics.totalViews,
      },
    }, { userId: userFoundByUserId.id });
    if (!updatedUser) throw UserUpdateFailedError;

    await this.questionRepository.updateQuestions({
      username: payload.username,
    });

    const answers = await this.questionRepository.getQuestions({
      username: payload.username,
      status: 'answered',
    });

    const questions = await this.questionRepository.getQuestions({
      username: payload.username,
      status: 'both',
    });

    const user: User = {
      id: updatedUser.id,
      userId: updatedUser.userId,
      username: updatedUser.username,
      metrics: {
        totalAnswers: answers.length,
        totalQuestions: questions.length,
        totalViews: updatedUser.metrics.totalViews,
      },
    };

    return user;
  };
}

export default UserUsecaseApplication;
