import {
  UserNotFoundError,
  UserUpdateFailedError,
  InvalidNameLengthError,
  InvalidCredentialsError,
  InvalidUsernameLengthError,
  InvalidPasswordLengthError,
  InvalidProfilePictureLengthError,
} from '../domain/errors/user-error';
import {
  PermissionDeniedError,
} from '../domain/errors/common-error';
import {
  UpdateUserEntity,
  RestrictedUserEntity,
} from '../domain/entities/user-entity';
import {
  validateNameLength,
  validatePasswordLength,
  validateUsernameLength,
  validateProfilePictureLength,
} from '../domain/validations/user-validations';
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

    const isNameLengthValid = validateNameLength(payload.name);
    if (!isNameLengthValid) throw InvalidNameLengthError;

    const isUsernameLengthValid = validateUsernameLength(payload.username);
    if (!isUsernameLengthValid) throw InvalidUsernameLengthError;

    const isPasswordLengthValid = validatePasswordLength(payload.password);
    if (!isPasswordLengthValid) throw InvalidPasswordLengthError;

    const isProfilePictureLengthValid = validateProfilePictureLength(payload.profilePicture);
    if (!isProfilePictureLengthValid) throw InvalidProfilePictureLengthError;

    const user = await this.userRepository.getUserByUsername(requestedUsername);
    if (!user) throw UserNotFoundError;

    const areCredentialsValid = await this.cryptographyService.comparePlainAndHash(
      payload.password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const updatedUser = await this.userRepository.updateUserByUsername(requestedUsername, payload);
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
