import {
  UserNotFoundError,
  UserUpdateFailedError,
} from '../domain/errors/user-error';
import {
  PermissionDeniedError,
  InvalidCredentialsError,
} from '../domain/errors/common-error';
import {
  UpdateUserEntity,
  RestrictedUserEntity,
} from '../domain/entities/user/user-entity';
import {
  validateUserUpdate,
} from '../domain/entities/user/user-validations';
import UserUsecase from '../domain/usecases/user-usecase';

class UserUsecaseApplication extends UserUsecase {
  getUserByUsername = async (username: string): Promise<RestrictedUserEntity> => {
    const user = await this.userRepository.getUserByUsername(username);
    if (!user) throw UserNotFoundError;

    const restrictedUserEntity: RestrictedUserEntity = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      profilePicture: user.profilePicture,
    };

    return restrictedUserEntity;
  };

  updateUserByUsername = async (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateUserEntity,
  ): Promise<RestrictedUserEntity> => {
    if (requestingUsername !== requestedUsername) throw PermissionDeniedError;

    validateUserUpdate(payload);

    const user = await this.userRepository.getUserByUsername(requestedUsername);
    if (!user) throw UserNotFoundError;

    const areCredentialsValid = await this.cryptographyService.comparePlainAndHash(
      payload.password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const updateUserEntity: UpdateUserEntity = {
      name: payload.name,
      email: payload.email,
      password: user.password,
      username: payload.username,
      profilePicture: payload.profilePicture,
    };

    const updatedUser = await this.userRepository.updateUserByUsername(
      requestedUsername,
      updateUserEntity,
    );
    if (!updatedUser) throw UserUpdateFailedError;

    const restrictedUserEntity: RestrictedUserEntity = {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      username: updatedUser.username,
      profilePicture: updatedUser.profilePicture,
    };

    return restrictedUserEntity;
  };
}

export default UserUsecaseApplication;
