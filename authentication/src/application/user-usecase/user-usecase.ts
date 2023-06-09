import {
  UserNotFoundError,
  UserUpdateFailedError,
  InvalidCredentialsError,
} from '../../domain/entities/user-entity/user-errors';
import {
  SecureUser,
  UpdateUser,
} from '../../domain/entities/user-entity/user-entities';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import userToSecureUser from '../../domain/entities/user-entity/user-mappers';
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
    payload: UpdateUser,
  ): Promise<SecureUser> => {
    validateUserUpdate(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const areCredentialsValid = await this.securityService.compareHashes(
      payload.password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const updatedUser = await this.userRepository.updateUser({
      name: payload.name,
      email: payload.email,
      username: payload.username,
    }, { username });
    if (!updatedUser) throw UserUpdateFailedError;

    const secureUser = userToSecureUser(updatedUser);
    return secureUser;
  };
}

export default UserUsecaseApplication;
