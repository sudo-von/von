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
import basicUserToDetailedUser from '../../domain/entities/user-entity/user-mappers';
import validateUserUpdate from '../../domain/entities/user-entity/user-validations/update-user-validations';
import validateUserCreation from '../../domain/entities/user-entity/user-validations/create-user-validations';

class UserUsecaseApplication extends UserUsecase {
  getUserByUsername = async (
    username: string,
  ): Promise<DetailedUser> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const answers = await this.questionRepository.getQuestions({ username, status: 'answered' });

    const questions = await this.questionRepository.getQuestions({ username, status: 'both' });

    const detailedUser = basicUserToDetailedUser(user, answers.length, questions.length);
    return detailedUser;
  };

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

    const detailedUser = basicUserToDetailedUser(createdUser, initialTotal, initialTotal);
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

    const detailedUser = basicUserToDetailedUser(updatedUser, answers.length, questions.length);
    return detailedUser;
  };
}

export default UserUsecaseApplication;
