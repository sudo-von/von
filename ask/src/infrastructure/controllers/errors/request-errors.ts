import {
  INVALID_QUESTION_LENGTH,
  PROFILE_CREATION_FAILED,
  PROFILE_NOT_FOUND,
  QUESTION_CREATION_FAILED,
  SINGLE_PROFILE_ONLY,
} from '../../../domain/errors/errors';
import statusCodes, { AllStatusCodes } from '../status-codes';

export type RequestErrorCode =
| 'INVALID_QUESTION_LENGTH_REQUEST_ERROR'
| 'QUESTION_CREATION_FAILED_REQUEST_ERROR'
| 'PROFILE_CREATION_FAILED_REQUEST_ERROR'
| 'PROFILE_NOT_FOUND_REQUEST_ERROR'
| 'SINGLE_PROFILE_ONLY_REQUEST_ERROR';

export type RequestError = {
  code: RequestErrorCode;
  message: string;
  statusCode: AllStatusCodes;
};

export const INVALID_QUESTION_LENGTH_REQUEST: RequestError = {
  code: 'INVALID_QUESTION_LENGTH_REQUEST_ERROR',
  message: INVALID_QUESTION_LENGTH.message,
  statusCode: statusCodes.clientSide.badRequest,
};

export const QUESTION_CREATION_FAILED_REQUEST: RequestError = {
  code: 'QUESTION_CREATION_FAILED_REQUEST_ERROR',
  message: QUESTION_CREATION_FAILED.message,
  statusCode: statusCodes.serverSide.internalServer,
};

export const PROFILE_CREATION_FAILED_REQUEST: RequestError = {
  code: 'PROFILE_CREATION_FAILED_REQUEST_ERROR',
  message: PROFILE_CREATION_FAILED.message,
  statusCode: statusCodes.serverSide.internalServer,
};

export const PROFILE_NOT_FOUND_REQUEST: RequestError = {
  code: 'PROFILE_NOT_FOUND_REQUEST_ERROR',
  message: PROFILE_NOT_FOUND.message,
  statusCode: statusCodes.clientSide.notFound,
};

export const SINGLE_PROFILE_ONLY_REQUEST: RequestError = {
  code: 'SINGLE_PROFILE_ONLY_REQUEST_ERROR',
  message: SINGLE_PROFILE_ONLY.message,
  statusCode: statusCodes.clientSide.conflict,
};