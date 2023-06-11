import {
  EMAIL_ALREADY_EXISTS,
  INVALID_CREDENTIALS,
  INVALID_INTEREST_LENGTH,
  INVALID_NAME_LENGTH,
  INVALID_PASSWORD_LENGTH,
  INVALID_POSITION_LENGTH,
  INVALID_QUOTE_LENGTH,
  INVALID_USERNAME_LENGTH,
  SINGLE_USER_ONLY,
  USER_CREATION_FAILED,
  USER_NOT_FOUND,
} from '../../../domain/errors/errors';
import statusCodes, { AllStatusCodes } from '../status-codes';

export type RequestErrorCode =
| 'INVALID_CREDENTIALS_REQUEST_ERROR'
| 'INVALID_INTEREST_LENGTH_REQUEST_ERROR'
| 'INVALID_NAME_LENGTH_REQUEST_ERROR'
| 'INVALID_PASSWORD_LENGTH_REQUEST_ERROR'
| 'INVALID_POSITION_LENGTH_REQUEST_ERROR'
| 'INVALID_QUOTE_LENGTH_REQUEST_ERROR'
| 'INVALID_USERNAME_LENGTH_REQUEST_ERROR'
| 'EMAIL_ALREADY_EXISTS_REQUEST_ERROR'
| 'USER_CREATION_FAILED_REQUEST_ERROR'
| 'USER_NOT_FOUND_REQUEST_ERROR'
| 'SINGLE_USER_ONLY_REQUEST_ERROR'
| 'INTERNAL_SERVER_REQUEST_ERROR';

export type RequestError = {
  code: RequestErrorCode;
  message: string;
  statusCode: AllStatusCodes;
};

export const INVALID_CREDENTIALS_REQUEST: RequestError = {
  code: 'INVALID_CREDENTIALS_REQUEST_ERROR',
  message: INVALID_CREDENTIALS.message,
  statusCode: statusCodes.clientSide.badRequest,
};

export const EMAIL_ALREADY_EXISTS_REQUEST: RequestError = {
  code: 'EMAIL_ALREADY_EXISTS_REQUEST_ERROR',
  message: EMAIL_ALREADY_EXISTS.message,
  statusCode: statusCodes.clientSide.conflict,
};

export const INVALID_INTEREST_LENGTH_REQUEST: RequestError = {
  code: 'INVALID_INTEREST_LENGTH_REQUEST_ERROR',
  message: INVALID_INTEREST_LENGTH.message,
  statusCode: statusCodes.clientSide.badRequest,
};

export const INVALID_NAME_LENGTH_REQUEST: RequestError = {
  code: 'INVALID_NAME_LENGTH_REQUEST_ERROR',
  message: INVALID_NAME_LENGTH.message,
  statusCode: statusCodes.clientSide.badRequest,
};

export const INVALID_PASSWORD_LENGTH_REQUEST: RequestError = {
  code: 'INVALID_PASSWORD_LENGTH_REQUEST_ERROR',
  message: INVALID_PASSWORD_LENGTH.message,
  statusCode: statusCodes.clientSide.badRequest,
};

export const INVALID_POSITION_LENGTH_REQUEST: RequestError = {
  code: 'INVALID_POSITION_LENGTH_REQUEST_ERROR',
  message: INVALID_POSITION_LENGTH.message,
  statusCode: statusCodes.clientSide.badRequest,
};

export const INVALID_QUOTE_LENGTH_REQUEST: RequestError = {
  code: 'INVALID_QUOTE_LENGTH_REQUEST_ERROR',
  message: INVALID_QUOTE_LENGTH.message,
  statusCode: statusCodes.clientSide.badRequest,
};

export const INVALID_USERNAME_LENGTH_REQUEST: RequestError = {
  code: 'INVALID_USERNAME_LENGTH_REQUEST_ERROR',
  message: INVALID_USERNAME_LENGTH.message,
  statusCode: statusCodes.clientSide.badRequest,
};

export const USER_CREATION_FAILED_REQUEST: RequestError = {
  code: 'USER_CREATION_FAILED_REQUEST_ERROR',
  message: USER_CREATION_FAILED.message,
  statusCode: statusCodes.serverSide.internalServer,
};

export const USER_NOT_FOUND_REQUEST: RequestError = {
  code: 'USER_NOT_FOUND_REQUEST_ERROR',
  message: USER_NOT_FOUND.message,
  statusCode: statusCodes.clientSide.notFound,
};

export const SINGLE_USER_ONLY_REQUEST: RequestError = {
  code: 'SINGLE_USER_ONLY_REQUEST_ERROR',
  message: SINGLE_USER_ONLY.message,
  statusCode: statusCodes.clientSide.conflict,
};

export const INTERNAL_SERVER_REQUEST: RequestError = {
  code: 'INTERNAL_SERVER_REQUEST_ERROR',
  message: 'An internal server error occurred. Please try again later.',
  statusCode: statusCodes.serverSide.internalServer,
};
