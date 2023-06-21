import { createRequestErrorFactory } from './request-error-factory';
import {
  EMAIL_ALREADY_EXISTS_REQUEST,
  EXPIRED_TOKEN_REQUEST,
  INTERNAL_SERVER_REQUEST,
  INVALID_CREDENTIALS_REQUEST,
  INVALID_INTEREST_LENGTH_REQUEST,
  INVALID_NAME_LENGTH_REQUEST,
  INVALID_PASSWORD_LENGTH_REQUEST,
  INVALID_POSITION_LENGTH_REQUEST,
  INVALID_QUOTE_LENGTH_REQUEST,
  INVALID_TOKEN_REQUEST,
  INVALID_USERNAME_LENGTH_REQUEST,
  PERMISSION_DENIED_REQUEST,
  SINGLE_USER_ONLY_REQUEST,
  USERNAME_ALREADY_EXISTS_REQUEST,
  USER_CREATION_FAILED_REQUEST,
  USER_NOT_FOUND_REQUEST,
  USER_UPDATE_FAILED_REQUEST,
} from './request-errors';

export const InvalidCredentialsRequestError = createRequestErrorFactory(
  INVALID_CREDENTIALS_REQUEST,
);

export const InvalidInterestRequestError = createRequestErrorFactory(
  INVALID_INTEREST_LENGTH_REQUEST,
);

export const InvalidNameRequestError = createRequestErrorFactory(
  INVALID_NAME_LENGTH_REQUEST,
);

export const InvalidPasswordRequestError = createRequestErrorFactory(
  INVALID_PASSWORD_LENGTH_REQUEST,
);

export const InvalidPositionRequestError = createRequestErrorFactory(
  INVALID_POSITION_LENGTH_REQUEST,
);

export const InvalidQuoteRequestError = createRequestErrorFactory(
  INVALID_QUOTE_LENGTH_REQUEST,
);

export const InvalidUsernameRequestError = createRequestErrorFactory(
  INVALID_USERNAME_LENGTH_REQUEST,
);

export const UserCreationFailedRequestError = createRequestErrorFactory(
  USER_CREATION_FAILED_REQUEST,
);

export const EmailAlreadyExistsRequestError = createRequestErrorFactory(
  EMAIL_ALREADY_EXISTS_REQUEST,
);

export const UserNotFoundRequestError = createRequestErrorFactory(
  USER_NOT_FOUND_REQUEST,
);

export const SingleUserOnlyRequestError = createRequestErrorFactory(
  SINGLE_USER_ONLY_REQUEST,
);

export const InternalServerRequestError = createRequestErrorFactory(
  INTERNAL_SERVER_REQUEST,
);

export const InvalidTokenRequestError = createRequestErrorFactory(
  INVALID_TOKEN_REQUEST,
);

export const ExpiredTokenRequestError = createRequestErrorFactory(
  EXPIRED_TOKEN_REQUEST,
);

export const PermissionDeniedRequestError = createRequestErrorFactory(
  PERMISSION_DENIED_REQUEST,
);

export const UserUpdateFailedRequestError = createRequestErrorFactory(
  USER_UPDATE_FAILED_REQUEST,
);

export const UsernameAlreadyExistsRequestError = createRequestErrorFactory(
  USERNAME_ALREADY_EXISTS_REQUEST,
);
