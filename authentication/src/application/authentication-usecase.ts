import {
  CreateUser,
  RestrictedUser,
  UserCredentials,
} from '../domain/entities/user/user-entities';
import {
  SingleUserOnlyError,
  InvalidCredentialsError,
} from '../domain/entities/user/user-errors';
import userToRestrictedUser from '../domain/entities/user/user-mappers';
import AuthenticationUsecase from '../domain/usecases/authentication-usecase';
import validateUserCreation from '../domain/entities/user/validations/create-user-validations';
import formatProfilePictureName from '../domain/entities/profile-picture/profile-picture-utils';

class AuthenticationUsecaseApplication extends AuthenticationUsecase {
  authenticate = async (userCredentials: UserCredentials): Promise<RestrictedUser> => {
    const userFoundByEmail = await this.userRepository.getUserByEmail(userCredentials.email);
    if (!userFoundByEmail) throw InvalidCredentialsError;

    const areCredentialsValid = await this.securityService.compareHashes(
      userCredentials.password,
      userFoundByEmail.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const restrictedUser = userToRestrictedUser(userFoundByEmail);
    return restrictedUser;
  };

  signup = async (payload: CreateUser): Promise<RestrictedUser> => {
    validateUserCreation(payload);

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const hashedPassword = await this.securityService.hashPassword(payload.password);
    const profilePictureNameChecksum = this.securityService.computeChecksum(payload.username);
    const formattedProfilePictureName = formatProfilePictureName(
      profilePictureNameChecksum,
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

    const restrictedUser = userToRestrictedUser(createdUser);
    return restrictedUser;
  };
}

export default AuthenticationUsecaseApplication;
