import {
  SingleUserOnlyError,
  InvalidNameLengthError,
  UserCreationFailedError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
  InvalidProfilePictureLengthError,
} from '../domain/errors/user-error';
import {
  InvalidCredentialsError,
} from '../domain/errors/common-error';
import {
  CreateUserEntity,
  RestrictedUserEntity,
} from '../domain/entities/user-entity';
import {
  validateNameLength,
  validatePasswordLength,
  validateUsernameLength,
  validateProfilePictureLength,
} from '../domain/validations/user-validations';
import AuthenticationUsecase from '../domain/usecases/authentication-usecase';

class AuthenticationUsecaseApplication extends AuthenticationUsecase {
  authenticate = async (email: string, password: string): Promise<RestrictedUserEntity> => {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw InvalidCredentialsError;

    const areCredentialsValid = await this.cryptographyService.comparePlainAndHash(
      password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const restrictedUserEntity: RestrictedUserEntity = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      profilePicture: user.profilePicture,
    };

    return restrictedUserEntity;
  };

  signup = async (payload: CreateUserEntity): Promise<RestrictedUserEntity> => {
    const isNameLengthValid = validateNameLength(payload.name);
    if (!isNameLengthValid) throw InvalidNameLengthError;

    const isUsernameLengthValid = validateUsernameLength(payload.username);
    if (!isUsernameLengthValid) throw InvalidUsernameLengthError;

    const isPasswordLengthValid = validatePasswordLength(payload.password);
    if (!isPasswordLengthValid) throw InvalidPasswordLengthError;

    const isProfilePictureLengthValid = validateProfilePictureLength(payload.profilePicture);
    if (!isProfilePictureLengthValid) throw InvalidProfilePictureLengthError;

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const hashedPassword = await this.cryptographyService.hash(payload.password);

    const createUserEntity: CreateUserEntity = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      username: payload.username,
      profilePicture: payload.profilePicture,
    };

    const createdUser = await this.userRepository.createUser(createUserEntity);
    if (!createdUser) throw UserCreationFailedError;

    const restrictedUserEntity: RestrictedUserEntity = {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      username: createdUser.username,
      profilePicture: createdUser.profilePicture,
    };

    return restrictedUserEntity;
  };
}

export default AuthenticationUsecaseApplication;
