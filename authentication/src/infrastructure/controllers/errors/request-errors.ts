import statusCodes from '../status-codes';
import errors from '../../../domain/errors/errors';

const requestErrors = {
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

export default requestErrors;
