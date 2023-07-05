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

  updateUserByUsername = async (username: string, payload: UpdateUser): Promise<User> => {
    validateUserUpdate(payload);

    const userFoundByUsername = await this.userRepository.getUserByUsername(username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUserByUsername(username, {
      userId: payload.userId,
      username: payload.username,
      metrics: {
        totalViews: userFoundByUsername.metrics.totalViews,
        totalAnswers: userFoundByUsername.metrics.totalAnswers,
        totalQuestions: userFoundByUsername.metrics.totalQuestions,
      },
    });

    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };
}

export default UserUsecaseApplication;
