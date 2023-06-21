import {
  RestrictedUserEntity,
  UpdateUserEntity,
} from '../domain/entities/user-entity';
import {
  validateName,
  validateEmail,
  validateUsername,
} from '../domain/entities/validations/user-validations';
import {
  validateQuote,
  validatePosition,
  validateInterest,
} from '../domain/entities/validations/about-validations';
import {
  InvalidNameError,
  EmailAlreadyExistsError,
  InvalidQuoteError,
  InvalidInterestError,
  InvalidPositionError,
  InvalidUsernameError,
  UserNotFoundError,
  UsernameAlreadyExistsError,
  PermissionDeniedError,
  InvalidCredentialsError,
  UserCouldntBeUpdatedError,
} from '../domain/errors/error-factories';
import UserUsecase from '../domain/usecases/user-usecase';

class UserUsecaseApplication extends UserUsecase {
  updateUserById = async (
    requestingUserId: string,
    requestedUserId: string,
    payload: UpdateUserEntity,
  ): Promise<RestrictedUserEntity> => {
    if (requestingUserId !== requestedUserId) throw PermissionDeniedError;

    const isNameValid = validateName(payload.name);
    if (!isNameValid) throw InvalidNameError;

    const isUsernameValid = validateUsername(payload.username);
    if (!isUsernameValid) throw InvalidUsernameError;

    const isEmailValid = validateEmail(payload.email);
    if (!isEmailValid) throw EmailAlreadyExistsError;

    const isPositionValid = validatePosition(payload.about.position);
    if (!isPositionValid) throw InvalidPositionError;

    const isInterestValid = validateInterest(payload.about.interest);
    if (!isInterestValid) throw InvalidInterestError;

    const isQuoteValid = validateQuote(payload.about.quote);
    if (!isQuoteValid) throw InvalidQuoteError;

    const userFoundById = await this.userRepository.getUserById(requestedUserId);
    if (!userFoundById) throw UserNotFoundError;

    const areCredentialsValid = await this.cryptographyService.comparePlainAndHash(
      payload.password,
      userFoundById.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    if (userFoundById.username !== payload.username) {
      const userFoundByUsername = await this.userRepository.getUserByUsername(payload.username);
      if (userFoundByUsername) throw UsernameAlreadyExistsError;
    }

    if (userFoundById.email !== payload.email) {
      const userFoundByEmail = await this.userRepository.getUserByEmail(payload.email);
      if (userFoundByEmail) throw EmailAlreadyExistsError;
    }

    const updateUserEntity: UpdateUserEntity = {
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: userFoundById.password,
      profilePicture: payload.profilePicture,
      about: {
        interest: payload.about.interest,
        position: payload.about.position,
        quote: payload.about.quote,
      },
    };

    const updatedUser = await this.userRepository.updateUserById(requestedUserId, updateUserEntity);
    if (!updatedUser) throw UserCouldntBeUpdatedError;

    const restrictedUserEntity: RestrictedUserEntity = {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      username: updatedUser.username,
      profilePicture: updatedUser.profilePicture,
      about: {
        interest: updateUserEntity.about.interest,
        position: updateUserEntity.about.position,
        quote: updateUserEntity.about.quote,
      },
    };

    return restrictedUserEntity;
  };
}

export default UserUsecaseApplication;
