import {
  CreateUserEntity,
  UpdateUserEntity,
  UserEntity,
} from '../domain/entities/user-entity';
import {
  InvalidUsernameNameLengthError,
  SingleUserOnlyError,
  UserCreationFailedError,
  UserNotFoundError,
  UserUpdateFailedError,
  UsernameAlreadyExistsError,
} from '../domain/errors/user-error';
import UserUsecase from '../domain/usecases/user-usecase';
import { validateUsername } from '../domain/validations/user-validations';

class UserUsecaseApplication extends UserUsecase {
  createUser = async (payload: CreateUserEntity): Promise<UserEntity> => {
    const isUsernameValid = validateUsername(payload.username);
    if (!isUsernameValid) throw InvalidUsernameNameLengthError;

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
    const isUsernameValid = validateUsername(payload.username);
    if (!isUsernameValid) throw InvalidUsernameNameLengthError;

    const user = await this.userRepository.getUserByUsername(username);
    if (!user) throw UserNotFoundError;

    if (username !== payload.username) {
      const usernameAlreadyExists = await this.userRepository.getUserByUsername(payload.username);
      if (usernameAlreadyExists) throw UsernameAlreadyExistsError;
    }

    const updatedUser = await this.userRepository.updateUserByUsername(username, payload);
    if (!updatedUser) throw UserUpdateFailedError;

    return updatedUser;
  };
}

export default UserUsecaseApplication;
