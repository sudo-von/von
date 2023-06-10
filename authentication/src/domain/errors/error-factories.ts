import errors from './errors';
import createErrorFactory from './error-factory';

export const InvalidCredentialsError = createErrorFactory(errors.invalidCredentials);
export const InvalidInterestError = createErrorFactory(errors.invalidInterest);
export const InvalidEmailError = createErrorFactory(errors.invalidEmail);
export const InvalidNameError = createErrorFactory(errors.invalidName);
export const InvalidPasswordError = createErrorFactory(errors.invalidPassword);
export const InvalidPositionError = createErrorFactory(errors.invalidPosition);
export const InvalidQuoteError = createErrorFactory(errors.invalidQuote);
export const InvalidUsernameError = createErrorFactory(errors.invalidUsername);
export const UserCouldntBeCreatedError = createErrorFactory(errors.userCouldntBeCreated);
export const UserNotFoundError = createErrorFactory(errors.userNotFound);
export const SingleUserOnlyError = createErrorFactory(errors.singleUserOnly);
