import {
  CreateUserEntity,
  RestrictedUserEntity,
  UserCredentialsEntity,
} from '../domain/entities/user/user-entity';
import {
  SingleUserOnlyError,
  InvalidCredentialsError,
} from '../domain/entities/user/user-errors';
import AuthenticationUsecase from '../domain/usecases/authentication-usecase';
import userEntityToRestrictedUserEntity from '../domain/entities/user/user-mappers';
import validateUserSignup from '../domain/entities/user/validations/signup-user-validations';
import formatProfilePictureUrl from '../domain/entities/profile-picture/profile-picture-utils';

class AuthenticationUsecaseApplication extends AuthenticationUsecase {
  authenticate = async (credentials: UserCredentialsEntity): Promise<RestrictedUserEntity> => {
    const foundUserByEmail = await this.userRepository.getUserByEmail(credentials.email);
    if (!foundUserByEmail) throw InvalidCredentialsError;

    const areCredentialsValid = await this.securityService.compareHashes(
      credentials.password,
      foundUserByEmail.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const restrictedUserEntity = userEntityToRestrictedUserEntity(foundUserByEmail);

    return restrictedUserEntity;
  };

  signup = async (payload: CreateUserEntity): Promise<RestrictedUserEntity> => {
    validateUserSignup(payload);

    const users = await this.userRepository.getUsers();
    if (users.length >= 300) throw SingleUserOnlyError;

    const hashedFilename = this.securityService.hash(payload.username);
    const hashedPassword = await this.securityService.hashPassword(payload.password);
    const hashedProfilePictureName = formatProfilePictureUrl(
      hashedFilename,
      payload.profilePicture.mimetype,
    );

    await this.fileService.store(hashedProfilePictureName, payload.profilePicture.buffer);

    const createdUser = await this.userRepository.createUser({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: hashedPassword,
      profilePictureName: hashedProfilePictureName,
    });

    const restrictedUser = userEntityToRestrictedUserEntity(createdUser);

    return restrictedUser;
  };
}

export default AuthenticationUsecaseApplication;
