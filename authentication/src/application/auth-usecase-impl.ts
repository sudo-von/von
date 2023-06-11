import { SmallUserEntity, CreateUserEntity, MediumUserEntity } from '../domain/entities/user-entity';
import { validatePosition, validateInterest, validateQuote } from '../domain/entities/validations/create-about-validations';
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUsername,
} from '../domain/entities/validations/create-user-validations';
import {
  InvalidCredentialsError,
  InvalidEmailError,
  InvalidInterestError,
  InvalidNameError,
  InvalidPasswordError,
  InvalidPositionError,
  InvalidQuoteError,
  InvalidUsernameError,
  SingleUserOnlyError,
  UserCouldntBeCreatedError,
} from '../domain/errors/error-factories';
import AuthUsecase from '../domain/usecases/auth-usecase';

class AuthUsecaseImpl extends AuthUsecase {
  authenticate = async (email: string, password: string): Promise<string> => {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw InvalidCredentialsError;

    const areCredentialsValid = await this.cryptographyService.comparePlainAndHash(
      password,
      user.password,
    );
    if (!areCredentialsValid) throw InvalidCredentialsError;

    const smallUser: SmallUserEntity = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      profile_picture: user.profile_picture,
    };

    const token = this.tokenService.generateToken(smallUser);
    return token;
  };

  refresh = async (token: string): Promise<string> => {
    const decodedToken = this.tokenService.decodeToken(token);
    const refreshToken = this.tokenService.generateToken(decodedToken);
    return refreshToken;
  };

  signup = async (userPayload: CreateUserEntity): Promise<MediumUserEntity> => {
    const isNameValid = validateName(userPayload.name);
    if (!isNameValid) throw InvalidNameError;

    const isUsernameValid = validateUsername(userPayload.username);
    if (!isUsernameValid) throw InvalidUsernameError;

    const isEmailValid = validateEmail(userPayload.email);
    if (!isEmailValid) throw InvalidEmailError;

    const isPasswordValid = validatePassword(userPayload.password);
    if (!isPasswordValid) throw InvalidPasswordError;

    const isPositionValid = validatePosition(userPayload.about.position);
    if (!isPositionValid) throw InvalidPositionError;

    const isInterestValid = validateInterest(userPayload.about.interest);
    if (!isInterestValid) throw InvalidInterestError;

    const isQuoteValid = validateQuote(userPayload.about.quote);
    if (!isQuoteValid) throw InvalidQuoteError;

    const users = await this.userRepository.getUsers();
    if (users && users.length) throw SingleUserOnlyError;

    const hashedPassword = await this.cryptographyService.hash(userPayload.password);

    const payload: CreateUserEntity = {
      ...userPayload,
      password: hashedPassword,
    };

    const createdUser = await this.userRepository.createUser(payload);
    if (!createdUser) throw UserCouldntBeCreatedError;

    const smallUser: MediumUserEntity = {
      id: createdUser.id,
      name: createdUser.name,
      username: createdUser.username,
      email: createdUser.email,
      profile_picture: createdUser.profile_picture,
      about: createdUser.about,
    };

    return smallUser;
  };
}

export default AuthUsecaseImpl;
