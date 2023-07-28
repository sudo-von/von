import {
  UserNotFoundError,
  SingleUserOnlyError,
  UserUpdateFailedError,
} from '../../domain/entities/user-entity/user-errors';
import {
  User,
  CreateUser,
  UpdateUser,
} from '../../domain/entities/user-entity/user-entities';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import validateUserUpdate from '../../domain/entities/user-entity/user-validations/update-user-validations';
import validateUserCreation from '../../domain/entities/user-entity/user-validations/create-user-validations';

class UserUsecaseApplication extends UserUsecase {
  createUser = async (
    payload: CreateUser,
  ): Promise<User> => {
    validateUserCreation(payload);

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const createdUser = await this.userRepository.createUser({
      userId: payload.userId,
      username: payload.username,
    });

    return createdUser;
  };

  updateUserByUserId = async (
    id: string,
    payload: UpdateUser,
  ): Promise<User> => {
    validateUserUpdate(payload);

    const user = await this.userRepository.getUser({ userId: id });
    if (!user) throw UserNotFoundError;

    await this.aboutRepository.updateVideo({
      username: payload.username,
    }, { username: user.username });

    const updatedUser = await this.userRepository.updateUser({
      username: payload.username,
    }, { userId: id });
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };
}

export default UserUsecaseApplication;
