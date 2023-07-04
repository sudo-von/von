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
import validateUserCreation from '../domain/entities/user/validations/create-user-validations';
import formatProfilePictureUrl from '../domain/entities/profile-picture/profile-picture-utils';

class AuthenticationUsecaseApplication extends AuthenticationUsecase {
  authenticate = async (credentials: UserCredentialsEntity): Promise<RestrictedUserEntity> => {
    const userFoundByEmail = await this.userRepository.getUserByEmail(credentials.email);
    if (!userFoundByEmail) throw InvalidCredentialsError;

    const areCredentialsValid = await this.securityService.compareHashes(
      credentials.password,
      userFoundByEmail.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const restrictedUser = userEntityToRestrictedUserEntity(userFoundByEmail);
    return restrictedUser;
  };

  signup = async (payload: CreateUserEntity): Promise<RestrictedUserEntity> => {
    validateUserCreation(payload);

    const users = await this.userRepository.getUsers();
    if (users.length >= 300) throw SingleUserOnlyError;

    const hashedPassword = await this.securityService.hashPassword(payload.password);
    const hashedProfilePictureName = this.securityService.hash(payload.username);
    const formattedProfilePictureName = formatProfilePictureUrl(
      hashedProfilePictureName,
      payload.profilePicture.mimetype,
    );

    await this.fileService.upload(formattedProfilePictureName, payload.profilePicture.buffer);

    const createdUser = await this.userRepository.createUser({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: hashedPassword,
      profilePictureName: formattedProfilePictureName,
    });

    const restrictedUser = userEntityToRestrictedUserEntity(createdUser);
    return restrictedUser;
  };
}

export default AuthenticationUsecaseApplication;
