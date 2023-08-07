import {
  UserNotFoundError,
  UserUpdateFailedError,
  InvalidCredentialsError,
} from '../../domain/entities/user-entity/user-errors';
import {
  DetailedSecureUser,
  UpdateUser,
} from '../../domain/entities/user-entity/user-entities';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import detailedUserToDetailedSecureUser from '../../domain/entities/user-entity/user-mappers';
import validateUserUpdate from '../../domain/entities/user-entity/user-validations/update-user-validations';

class UserUsecaseApplication extends UserUsecase {
  getUserByUsername = async (username: string): Promise<DetailedSecureUser> => {
    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const secureUser = detailedUserToDetailedSecureUser(user);
    return secureUser;
  };

  updateUserByUsername = async (username: string, payload: UpdateUser): Promise<DetailedSecureUser> => {
    validateUserUpdate(payload);

    const user = await this.userRepository.getUser({ username });
    if (!user) throw UserNotFoundError;

    const areCredentialsValid = await this.passwordManagerService.comparePasswords(
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

    const secureUser = detailedUserToDetailedSecureUser(updatedUser);
    return secureUser;
  };
}

export default UserUsecaseApplication;
