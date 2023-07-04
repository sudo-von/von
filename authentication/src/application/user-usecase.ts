import {
  UserNotFoundError,
  UserUpdateFailedError,
  InvalidCredentialsError,
} from '../domain/entities/user/user-errors';
import {
  UpdateUser,
  RestrictedUser,
} from '../domain/entities/user/user-entities';
import UserUsecase from '../domain/usecases/user-usecase';
import userToRestrictedUser from '../domain/entities/user/user-mappers';
import validateUserUpdate from '../domain/entities/user/validations/update-user-validations';
import formatProfilePictureName from '../domain/entities/profile-picture/profile-picture-utils';

class UserUsecaseApplication extends UserUsecase {
  getUserByUsername = async (username: string): Promise<RestrictedUser> => {
    const userFoundByUsername = await this.userRepository.getUserByUsername(username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const restrictedUser = userToRestrictedUser(userFoundByUsername);
    return restrictedUser;
  };

  updateUserByUsername = async (username: string, payload: UpdateUser): Promise<RestrictedUser> => {
    validateUserUpdate(payload);

    const userFoundByUsername = await this.userRepository.getUserByUsername(username);
    if (!userFoundByUsername) throw UserNotFoundError;

    const areCredentialsValid = await this.securityService.compareHashes(
      payload.password,
      userFoundByUsername.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const profilePictureNameChecksum = this.securityService.computeChecksum(payload.username);
    const formattedProfilePictureName = formatProfilePictureName(
      profilePictureNameChecksum,
      payload.profilePicture.mimetype,
    );

    await this.fileService.delete(userFoundByUsername.profilePictureName);

    await this.fileService.upload(formattedProfilePictureName, payload.profilePicture.buffer);

    const updatedUser = await this.userRepository.updateUserByUsername(username, {
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: userFoundByUsername.password,
      profilePictureName: formattedProfilePictureName,
    });
    if (!updatedUser) throw UserUpdateFailedError;

    const restrictedUser = userToRestrictedUser(updatedUser);
    return restrictedUser;
  };
}

export default UserUsecaseApplication;
