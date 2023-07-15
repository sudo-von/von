import {
  UserNotFoundError,
  SingleUserOnlyError,
  InvalidCredentialsError,
} from '../../domain/entities/user-entity/user-errors';
import {
  SecureUser,
  UserCredentials,
  CreateUser,
} from '../../domain/entities/user-entity/user-entities';
import userToSecureUser from '../../domain/entities/user-entity/user-mappers';
import AuthenticationUsecase from '../../domain/usecases/authentication-usecase/authentication-usecase';
import validateUserCreation from '../../domain/entities/user-entity/user-validations/create-user-validations';

class AuthenticationUsecaseApplication extends AuthenticationUsecase {
  signup = async (
    payload: CreateUser,
  ): Promise<SecureUser> => {
    validateUserCreation(payload);

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const hashedPassword = await this.securityService.hashPassword(payload.password);

    const createdUser = await this.userRepository.createUser({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: hashedPassword,
    });

    const secureUser = userToSecureUser(createdUser);
    return secureUser;
  };

  login = async (
    credentials: UserCredentials,
  ): Promise<SecureUser> => {
    const user = await this.userRepository.getUser({ email: credentials.email });
    if (!user) throw UserNotFoundError;

    const areCredentialsValid = await this.securityService.compareHashes(
      credentials.password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const secureUser = userToSecureUser(user);
    return secureUser;
  };
}

export default AuthenticationUsecaseApplication;
