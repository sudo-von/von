import { ErrorFactory, errors } from '../../domain/errors';
import statusCodes from './status-codes';

export type RequestErrorFactory = ErrorFactory & {
  statusCode: number;
};

const createRequestErrorFactory = ({
  name,
  message,
  statusCode,
}: RequestErrorFactory) => class RequestErrorFactory extends Error {
  statusCode: number;

  constructor() {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, RequestErrorFactory.prototype);
  }
};

export const requestErrors = {
  invalidCredentials: {
    statusCode: statusCodes.clientSide.unauthorized,
    name: 'InvalidCredentialsRequestError',
    message: errors.invalidCredentials.message,
  },
  invalidInterest: {
    statusCode: statusCodes.clientSide.unprocessableEntity,
    name: 'InvalidInterestRequestError',
    message: errors.invalidInterest.message,
  },
  invalidEmail: {
    statusCode: statusCodes.clientSide.unprocessableEntity,
    name: 'InvalidEmailRequestError',
    message: errors.invalidEmail.message,
  },
  invalidName: {
    statusCode: statusCodes.clientSide.unprocessableEntity,
    name: 'InvalidNameRequestError',
    message: errors.invalidName.message,
  },
  invalidPassword: {
    statusCode: statusCodes.clientSide.unprocessableEntity,
    name: 'InvalidPasswordRequestError',
    message: errors.invalidPassword.message,
  },
  invalidPosition: {
    statusCode: statusCodes.clientSide.unprocessableEntity,
    name: 'InvalidPositionRequestError',
    message: errors.invalidPosition.message,
  },
  invalidQuote: {
    statusCode: statusCodes.clientSide.unprocessableEntity,
    name: 'InvalidQuoteRequestError',
    message: errors.invalidQuote.message,
  },
  invalidUsername: {
    statusCode: statusCodes.clientSide.unprocessableEntity,
    name: 'InvalidUsernameRequestError',
    message: errors.invalidUsername.message,
  },
  userCouldntBeCreated: {
    statusCode: statusCodes.clientSide.conflict,
    name: 'UserCouldntBeCreatedRequestError',
    message: errors.userCouldntBeCreated.message,
  },
  userNotFound: {
    statusCode: statusCodes.clientSide.notFound,
    name: 'UserNotFoundRequestError',
    message: errors.userNotFound.message,
  },
  singleUserOnly: {
    statusCode: statusCodes.clientSide.conflict,
    name: 'SingleUserOnlyRequestError',
    message: errors.singleUserOnly.message,
  },
  internalServer: {
    statusCode: statusCodes.serverSide.internalServerError,
    name: 'SingleUserOnlyRequestError',
    message: 'there was an error... try again later...',
  },
} as const;

export type ErrorNames = typeof requestErrors[keyof typeof requestErrors]['name'];

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
