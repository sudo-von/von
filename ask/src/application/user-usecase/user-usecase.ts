import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
} from '../../domain/entities/user-entity/user-errors';
import {
  CreateUser,
  UpdateUser,
  DetailedUser,
} from '../../domain/entities/user-entity/user-entities';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import validateUserUpdate from '../../domain/entities/user-entity/user-validations/update-user-validations';
import validateUserCreation from '../../domain/entities/user-entity/user-validations/create-user-validations';

class UserUsecaseApplication extends UserUsecase {
  createUser = async (
    payload: CreateUser,
  ): Promise<DetailedUser> => {
    validateUserCreation(payload);

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const initialTotal = 0;

    const createdUser = await this.userRepository.createUser({
      userId: payload.userId,
      username: payload.username,
      metrics: {
        totalViews: initialTotal,
      },
    });

    const detailedUser: DetailedUser = {
      id: createdUser.id,
      userId: createdUser.userId,
      username: createdUser.username,
      metrics: {
        totalAnswers: initialTotal,
        totalQuestions: initialTotal,
        totalViews: createdUser.metrics.totalViews,
      },
    };
    return detailedUser;
  };

  getUserByUsername = async (
    username: string,
  ): Promise<DetailedUser> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const answers = await this.questionRepository.getQuestions({ username, status: 'answered' });

    const questions = await this.questionRepository.getQuestions({ username, status: 'both' });

    const detailedUser: DetailedUser = {
      id: user.id,
      userId: user.userId,
      username: user.username,
      metrics: {
        totalAnswers: answers.length,
        totalQuestions: questions.length,
        totalViews: user.metrics.totalViews,
      },
    };
    return detailedUser;
  };

  updateUserByUserId = async (
    userId: string,
    { username }: UpdateUser,
  ): Promise<DetailedUser> => {
    validateUserUpdate({ username });

    const user = await this.userRepository.getUser({ userId });
    if (!user) throw UserNotFoundError;

    const updatedUser = await this.userRepository.updateUser({ username }, { userId });
    if (!updatedUser) throw UserUpdateFailedError;

    await this.questionRepository.updateQuestions({ username });

    const answers = await this.questionRepository.getQuestions({ username, status: 'answered' });

    const questions = await this.questionRepository.getQuestions({ username, status: 'both' });

    const detailedUser: DetailedUser = {
      id: updatedUser.id,
      userId: updatedUser.userId,
      username: updatedUser.username,
      metrics: {
        totalAnswers: answers.length,
        totalQuestions: questions.length,
        totalViews: updatedUser.metrics.totalViews,
      },
    };
    return detailedUser;
  };
}

export default UserUsecaseApplication;
