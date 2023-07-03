import {
  SingleUserOnlyError,
  InvalidCredentialsError,
} from '../domain/entities/user/user-errors';
import {
  CreateUserEntity,
  RestrictedUserEntity,
  UserPayload,
} from '../domain/entities/user/user-entity';
import AuthenticationUsecase from '../domain/usecases/authentication-usecase';
import validateUserSignup from '../domain/entities/user/validations/signup-user-validations';

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
      profilePictureUrl: user.profilePictureUrl,
    };

    return restrictedUserEntity;
  };

  signup = async (payload: CreateUserEntity): Promise<RestrictedUserEntity> => {
    validateUserSignup(payload);

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const hashedPassword = await this.cryptographyService.hash(payload.password);

    const createUserEntity: UserPayload = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      username: payload.username,
      profilePictureUrl: payload.profilePicture.name,
    };

    const createdUser = await this.userRepository.createUser(createUserEntity);

    const restrictedUserEntity: RestrictedUserEntity = {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      username: createdUser.username,
      profilePictureUrl: createdUser.profilePictureUrl,
    };

    return restrictedUserEntity;
  };
}

export default AuthenticationUsecaseApplication;
