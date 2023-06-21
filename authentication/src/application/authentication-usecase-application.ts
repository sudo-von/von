import {
  EssentialUserEntity,
  CreateUserEntity,
  RestrictedUserEntity,
} from '../domain/entities/user-entity';
import {
  validateName,
  validateEmail,
  validatePassword,
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
  SingleUserOnlyError,
  InvalidInterestError,
  InvalidPasswordError,
  InvalidPositionError,
  InvalidUsernameError,
  InvalidCredentialsError,
  UserCouldntBeCreatedError,
} from '../domain/errors/error-factories';
import AuthUsecase from '../domain/usecases/authentication-usecase';

class AuthenticationUsecaseApplication extends AuthUsecase {
  authenticate = async (email: string, password: string): Promise<string> => {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw InvalidCredentialsError;

    const areCredentialsValid = await this.cryptographyService.comparePlainAndHash(
      password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const essentialUserEntity: EssentialUserEntity = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      profilePicture: user.profilePicture,
    };

    const token = this.tokenService.generateToken(essentialUserEntity);
    return token;
  };

  signup = async (payload: CreateUserEntity): Promise<RestrictedUserEntity> => {
    const isNameValid = validateName(payload.name);
    if (!isNameValid) throw InvalidNameError;

    const isUsernameValid = validateUsername(payload.username);
    if (!isUsernameValid) throw InvalidUsernameError;

    const isEmailValid = validateEmail(payload.email);
    if (!isEmailValid) throw EmailAlreadyExistsError;

    const isPasswordValid = validatePassword(payload.password);
    if (!isPasswordValid) throw InvalidPasswordError;

    const isPositionValid = validatePosition(payload.about.position);
    if (!isPositionValid) throw InvalidPositionError;

    const isInterestValid = validateInterest(payload.about.interest);
    if (!isInterestValid) throw InvalidInterestError;

    const isQuoteValid = validateQuote(payload.about.quote);
    if (!isQuoteValid) throw InvalidQuoteError;

    const users = await this.userRepository.getUsers();
    if (users.length) throw SingleUserOnlyError;

    const hashedPassword = await this.cryptographyService.hash(payload.password);

    const createUserEntity: CreateUserEntity = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      username: payload.username,
      profilePicture: payload.profilePicture,
      about: {
        interest: payload.about.interest,
        position: payload.about.position,
        quote: payload.about.quote,
      },
    };

    const createdUser = await this.userRepository.createUser(createUserEntity);
    if (!createdUser) throw UserCouldntBeCreatedError;

    const restrictedUserEntity: RestrictedUserEntity = {
      id: createdUser.id,
      name: createdUser.name,
      about: createdUser.about,
      email: createdUser.email,
      username: createdUser.username,
      profilePicture: createdUser.profilePicture,
    };

    return restrictedUserEntity;
  };
}

export default AuthenticationUsecaseApplication;
