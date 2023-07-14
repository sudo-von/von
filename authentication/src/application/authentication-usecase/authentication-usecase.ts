import {
  SecureUser,
  UserCredentials,
  CreateUserWithFile,
} from '../../domain/entities/user-entity/user-entities';
import {
  UserNotFoundError,
  SingleUserOnlyError,
  InvalidCredentialsError,
} from '../../domain/entities/user-entity/user-errors';
import userToSecureUser from '../../domain/entities/user-entity/user-mappers';
import generateAvatarFilename from '../../domain/entities/profile-picture-entity/profile-picture-utils';
import AuthenticationUsecase from '../../domain/usecases/authentication-usecase/authentication-usecase';
import validateUserSignup from '../../domain/entities/user-entity/user-validations/signup-user-validations';

class AuthenticationUsecaseApplication extends AuthenticationUsecase {
  login = async ({
    email,
    password,
  }: UserCredentials): Promise<SecureUser> => {
    const user = await this.userRepository.getUser({ email });
    if (!user) throw UserNotFoundError;

    const areCredentialsValid = await this.securityService.compareHashes(password, user.password);
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const secureUser = userToSecureUser(user);
    return secureUser;
  };

  signup = async (
    payload: CreateUserWithFile,
  ): Promise<SecureUser> => {
    validateUserSignup(payload);

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const hashedPassword = await this.securityService.hashPassword(payload.password);

    const usernameChecksum = this.securityService.computeChecksum(payload.username);

    const avatarFilename = generateAvatarFilename(usernameChecksum, payload.avatar.mimetype);

    await this.fileService.upload(avatarFilename, payload.avatar.buffer);

    const createdUser = await this.userRepository.createUser({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: hashedPassword,
      avatar: avatarFilename,
    });

    const secureUser = userToSecureUser(createdUser);
    return secureUser;
  };
}

export default AuthenticationUsecaseApplication;
