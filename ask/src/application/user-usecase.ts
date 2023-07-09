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
import UserUsecase from '../domain/usecases/user-usecase/user-usecase';
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
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    return user;
  };

  updateUserByUserId = async (id: string, payload: UpdateUser): Promise<User> => {
    validateUserUpdate(payload);

    const user = await this.userRepository.getUser({ userId: id });
    if (!user) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({
      userId: id,
      username: payload.username,
      metrics: {
        totalViews: user.metrics.totalViews,
        totalAnswers: user.metrics.totalAnswers,
        totalQuestions: user.metrics.totalQuestions,
      },
    }, { userId: id });
    if (!updatedUser) throw UserUpdateFailedError;

    await this.questionRepository.updateQuestions({
      username: payload.username,
    });

    return updatedUser;
  };
}

export default UserUsecaseApplication;
