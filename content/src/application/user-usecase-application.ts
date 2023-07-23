import {
  SingleUserOnlyError,
  UserUpdateFailedError,
  UserCreationFailedError,
} from '../domain/entities/user/user-errors';
import {
  UserEntity,
  CreateUserEntity,
  UpdateUserEntity,
} from '../domain/entities/user/user-entity';
import UserUsecase from '../domain/usecases/user-usecase';
import validateUserUpdate from '../domain/entities/user/validations/update-user-validations';
import validateUserCreation from '../domain/entities/user/validations/create-user-validations';

class UserUsecaseApplication extends UserUsecase {
  createUser = async (
    payload: CreateUserEntity,
  ): Promise<UserEntity> => {
    validateUserCreation(payload);

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const createdUser = await this.userRepository.createUser(payload);
    if (!createdUser) throw UserCreationFailedError;

    return createdUser;
  };

  updateUserByUsername = async (
    username: string,
    payload: UpdateUserEntity,
  ): Promise<UserEntity> => {
    validateUserUpdate(payload);

    const updatedUser = await this.userRepository.updateUserByUsername(username, payload);
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };
}

export default UserUsecaseApplication;
