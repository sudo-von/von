import { CreateUserEntity } from '../domain/entities/create-user-entity';
import { UserEntity } from '../domain/entities/user-entity';
import { validatePosition, validateInterest, validateQuote } from '../domain/entities/validations/create-about-validations';
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUsername,
} from '../domain/entities/validations/create-user-validations';
import {
  InvalidEmailError,
  InvalidInterestError,
  InvalidNameError,
  InvalidPasswordError,
  InvalidPositionError,
  InvalidQuoteError,
  InvalidUsernameError,
  SingleUserOnlyError,
  UserCouldntBeCreatedError,
} from '../domain/errors';
import { AbstractUserUsecase, UserUsecase } from '../domain/usecase/user-usecase';

class UserUsecaseImpl extends AbstractUserUsecase implements UserUsecase {
  getUserByUsername = async (username: string): Promise<UserEntity> => {
    const user = await this.userRepository.getUserById(username);
    return user as UserEntity;
  };

  createUser = async (userPayload: CreateUserEntity): Promise<UserEntity> => {
    const isNameValid = validateName(userPayload.name);
    if (!isNameValid) throw new InvalidNameError();

    const isUsernameValid = validateUsername(userPayload.username);
    if (!isUsernameValid) throw new InvalidUsernameError();

    const isEmailValid = validateEmail(userPayload.email);
    if (!isEmailValid) throw new InvalidEmailError();

    const isPasswordValid = validatePassword(userPayload.password);
    if (!isPasswordValid) throw new InvalidPasswordError();

    const isPositionValid = validatePosition(userPayload.about.position);
    if (!isPositionValid) throw new InvalidPositionError();

    const isInterestValid = validateInterest(userPayload.about.interest);
    if (!isInterestValid) throw new InvalidInterestError();

    const isQuoteValid = validateQuote(userPayload.about.quote);
    if (!isQuoteValid) throw new InvalidQuoteError();

    const users = await this.userRepository.getUsers();
    if (users && users.length) throw new SingleUserOnlyError();

    const password = await this.hashService.hashSensitiveData(userPayload.password);

    const payload: CreateUserEntity = {
      ...userPayload,
      password,
    };

    const createdUser = await this.userRepository.createUser(payload);
    if (!createdUser) throw new UserCouldntBeCreatedError();

    return createdUser;
  };
}

export default UserUsecaseImpl;
