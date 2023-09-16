import {
  NoUserCreatedYetError,
  UserUpdateFailedError,
  InvalidCredentialsError,
} from '../../domain/entities/user-entity/user-errors';
import {
  UpdateUser,
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import detailedToSecureUser from '../../domain/entities/user-entity/user-mappers';
import validateUserUpdate from '../../domain/entities/user-entity/user-validations/update-user-validations';

class UserUsecaseApplication extends UserUsecase {
  getUser = async ():
  Promise<DetailedSecureUser> => {
    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    const secureUser = detailedToSecureUser(user);
    return secureUser;
  };

  updateUser = async (
    payload: UpdateUser,
  ): Promise<DetailedSecureUser> => {
    validateUserUpdate(payload);

    const user = await this.userRepository.getUser();
    if (!user) throw NoUserCreatedYetError;

    const areCredentialsValid = await this.passwordService.comparePasswords(
      payload.password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const updatedUser = await this.userRepository.updateUser({
      name: payload.name,
      email: payload.email,
      username: payload.username,
    });
    if (!updatedUser) throw UserUpdateFailedError;

    const secureUser = detailedToSecureUser(updatedUser);
    return secureUser;
  };
}

export default UserUsecaseApplication;
