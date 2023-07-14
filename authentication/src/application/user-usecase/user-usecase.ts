import {
  UserNotFoundError,
  UserUpdateFailedError,
  InvalidCredentialsError,
} from '../../domain/entities/user-entity/user-errors';
import {
  SecureUser,
  UpdateUserWithFile,
} from '../../domain/entities/user-entity/user-entities';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import userToSecureUser from '../../domain/entities/user-entity/user-mappers';
import generateAvatarFilename from '../../domain/entities/profile-picture-entity/profile-picture-utils';
import validateUserUpdate from '../../domain/entities/user-entity/user-validations/update-user-validations';

class UserUsecaseApplication extends UserUsecase {
  getUserByUsername = async (
    username: string,
  ): Promise<SecureUser> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const secureUser = userToSecureUser(user);
    return secureUser;
  };

  updateUserByUsername = async (
    username: string,
    payload: UpdateUserWithFile,
  ): Promise<SecureUser> => {
    validateUserUpdate(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const areCredentialsValid = await this.securityService.compareHashes(
      payload.password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    let avatarFilename;

    if (payload.avatar) {
      await this.fileService.delete(user.avatar);

      const usernameChecksum = this.securityService.computeChecksum(payload.username || username);

      avatarFilename = generateAvatarFilename(usernameChecksum, payload.avatar.mimetype);

      await this.fileService.upload(avatarFilename, payload.avatar.buffer);
    }

    const updatedUser = await this.userRepository.updateUser({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      avatar: avatarFilename,
    }, { username });
    if (!updatedUser) throw UserUpdateFailedError;

    const secureUser = userToSecureUser(updatedUser);
    return secureUser;
  };
}

export default UserUsecaseApplication;
