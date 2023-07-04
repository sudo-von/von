import {
  UserNotFoundError,
  UserUpdateFailedError,
  InvalidCredentialsError,
  UserPermissionDeniedError,
} from '../domain/entities/user/user-errors';
import {
  UpdateUserEntity,
  RestrictedUserEntity,
} from '../domain/entities/user/user-entity';
import UserUsecase from '../domain/usecases/user-usecase';
import userEntityToRestrictedUserEntity from '../domain/entities/user/user-mappers';
import validateUserUpdate from '../domain/entities/user/validations/update-user-validations';
import formatProfilePictureUrl from '../domain/entities/profile-picture/profile-picture-utils';

class UserUsecaseApplication extends UserUsecase {
  getUserByUsername = async (username: string): Promise<RestrictedUserEntity> => {
    const userFoundByUsername = await this.userRepository.getUserByUsername(username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const restrictedUser = userEntityToRestrictedUserEntity(userFoundByUsername);
    return restrictedUser;
  };

  updateUserByUsername = async (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateUserEntity,
  ): Promise<RestrictedUserEntity> => {
    if (requestingUsername !== requestedUsername) throw UserPermissionDeniedError;

    validateUserUpdate(payload);

    const userFoundByUsername = await this.userRepository.getUserByUsername(requestedUsername);
    if (!userFoundByUsername) throw UserNotFoundError;

    const areCredentialsValid = await this.securityService.compareHashes(
      payload.password,
      userFoundByUsername.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const hashedProfilePictureName = this.securityService.hash(payload.username);
    const formattedProfilePictureName = formatProfilePictureUrl(
      hashedProfilePictureName,
      payload.profilePicture.mimetype,
    );

    await this.fileService.upload(formattedProfilePictureName, payload.profilePicture.buffer);

    const updatedUser = await this.userRepository.updateUserByUsername(requestedUsername, {
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: userFoundByUsername.password,
      profilePictureName: formattedProfilePictureName,
    });
    if (!updatedUser) throw UserUpdateFailedError;

    const restrictedUser = userEntityToRestrictedUserEntity(updatedUser);
    return restrictedUser;
  };
}

export default UserUsecaseApplication;
