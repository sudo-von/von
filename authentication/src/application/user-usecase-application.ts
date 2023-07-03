import {
  InvalidCredentialsError,
  UserNotFoundError,
  UserPermissionDeniedError,
  UserUpdateFailedError,
} from '../domain/entities/user/user-errors';
import {
  UpdateUserEntity,
  RestrictedUserEntity,
  UserPayload,
} from '../domain/entities/user/user-entity';
import validateUserUpdate from '../domain/entities/user/validations/update-user-validations';
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
      profilePictureUrl: user.profilePictureUrl,
    };

    return restrictedUserEntity;
  };

  updateUserByUsername = async (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateUserEntity,
  ): Promise<RestrictedUserEntity> => {
    if (requestingUsername !== requestedUsername) throw UserPermissionDeniedError;

    validateUserUpdate(payload);

    const user = await this.userRepository.getUserByUsername(requestedUsername);
    if (!user) throw UserNotFoundError;

    const areCredentialsValid = await this.cryptographyService.comparePlainAndHash(
      payload.password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const updateUserEntity: UserPayload = {
      name: payload.name,
      email: payload.email,
      password: user.password,
      username: payload.username,
      profilePictureUrl: payload.profilePicture.name,
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
      profilePictureUrl: updatedUser.profilePictureUrl,
    };

    return restrictedUserEntity;
  };
}

export default UserUsecaseApplication;
