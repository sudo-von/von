import { createDomainErrorFactory } from './error-factory';
import {
  INVALID_CREDENTIALS,
  EMAIL_ALREADY_EXISTS,
  INVALID_INTEREST_LENGTH,
  INVALID_NAME_LENGTH,
  INVALID_PASSWORD_LENGTH,
  INVALID_POSITION_LENGTH,
  INVALID_QUOTE_LENGTH,
  INVALID_USERNAME_LENGTH,
  USER_CREATION_FAILED,
  USER_NOT_FOUND,
  SINGLE_USER_ONLY,
} from './errors';

export const InvalidCredentialsError = createDomainErrorFactory(INVALID_CREDENTIALS);
export const InvalidEmailError = createDomainErrorFactory(EMAIL_ALREADY_EXISTS);
export const InvalidInterestError = createDomainErrorFactory(INVALID_INTEREST_LENGTH);
export const InvalidNameError = createDomainErrorFactory(INVALID_NAME_LENGTH);
export const InvalidPasswordError = createDomainErrorFactory(INVALID_PASSWORD_LENGTH);
export const InvalidPositionError = createDomainErrorFactory(INVALID_POSITION_LENGTH);
export const InvalidQuoteError = createDomainErrorFactory(INVALID_QUOTE_LENGTH);
export const InvalidUsernameError = createDomainErrorFactory(INVALID_USERNAME_LENGTH);
export const UserCouldntBeCreatedError = createDomainErrorFactory(USER_CREATION_FAILED);
export const UserNotFoundError = createDomainErrorFactory(USER_NOT_FOUND);
export const SingleUserOnlyError = createDomainErrorFactory(SINGLE_USER_ONLY);
