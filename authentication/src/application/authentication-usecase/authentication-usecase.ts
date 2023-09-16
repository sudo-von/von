import {
  SingleUserOnlyError,
  InvalidCredentialsError,
} from '../../domain/entities/user-entity/user-errors';
import {
  CreateUser,
  UserCredentials,
  DetailedSecureUser,
} from '../../domain/entities/user-entity/user-entities';
import detailedToSecureUser from '../../domain/entities/user-entity/user-mappers';
import AuthenticationUsecase from '../../domain/usecases/authentication-usecase/authentication-usecase';
import validateUserCreation from '../../domain/entities/user-entity/user-validations/create-user-validations';

class AuthenticationUsecaseApplication extends AuthenticationUsecase {
  signup = async (
    payload: CreateUser,
  ): Promise<DetailedSecureUser> => {
    validateUserCreation(payload);

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const hashedPassword = await this.passwordService.hashPassword(payload.password);

    const createdUser = await this.userRepository.createUser({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: hashedPassword,
      socialNetworks: [],
    });

    const secureUser = detailedToSecureUser(createdUser);
    return secureUser;
  };

  signin = async (
    credentials: UserCredentials,
  ): Promise<DetailedSecureUser> => {
    const user = await this.userRepository.getUser({ email: credentials.email });
    if (!user) throw InvalidCredentialsError;

    const areCredentialsValid = await this.passwordService.comparePasswords(
      credentials.password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const secureUser = detailedToSecureUser(user);
    return secureUser;
  };
}

export default AuthenticationUsecaseApplication;
