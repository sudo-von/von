import createRequestErrorFactory from './request-error-factory';
import requestErrors from './request-errors';

export const InvalidCredentialsRequestError = createRequestErrorFactory(
  requestErrors.invalidCredentials,
);

export const InvalidInterestRequestError = createRequestErrorFactory(
  requestErrors.invalidInterest,
);

export const InvalidEmailRequestError = createRequestErrorFactory(
  requestErrors.invalidEmail,
);

export const InvalidNameRequestError = createRequestErrorFactory(
  requestErrors.invalidName,
);

export const InvalidPasswordRequestError = createRequestErrorFactory(
  requestErrors.invalidPassword,
);

export const InvalidPositionRequestError = createRequestErrorFactory(
  requestErrors.invalidPosition,
);

export const InvalidQuoteRequestError = createRequestErrorFactory(
  requestErrors.invalidQuote,
);

export const InvalidUsernameRequestError = createRequestErrorFactory(
  requestErrors.invalidUsername,
);

export const UserCouldntBeCreatedRequestError = createRequestErrorFactory(
  requestErrors.userCouldntBeCreated,
);

export const UserNotFoundRequestError = createRequestErrorFactory(
  requestErrors.userNotFound,
);

export const SingleUserOnlyRequestError = createRequestErrorFactory(
  requestErrors.singleUserOnly,
);

export const InternalServerRequestError = createRequestErrorFactory(
  requestErrors.internalServer,
);
