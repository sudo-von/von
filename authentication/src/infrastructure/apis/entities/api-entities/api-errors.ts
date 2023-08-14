import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';

export const InternalServerError = createServerErrorFactory({
  code: 'INTERNAL_SERVER',
  message: 'An internal server error occurred. Please try again later.',
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const InvalidIdParameterServerError = createServerErrorFactory({
  code: 'INVALID_ID_PARAMETER',
  message: 'The id parameter should be a valid 24-character hexadecimal ID.',
  statusCode: statusCode.BAD_REQUEST,
});

export const InvalidFileParameterServerError = createServerErrorFactory({
  code: 'INVALID_FILE_PARAMETER',
  message: 'The file parameter is incorrect or empty.',
  statusCode: statusCode.BAD_REQUEST,
});

export const RequiredFieldServerError = createServerErrorFactory({
  code: 'REQUIRED_FIELD',
  message: 'Please fill in all mandatory fields.',
  statusCode: statusCode.BAD_REQUEST,
});

export const RequiredIdParameterServerError = createServerErrorFactory({
  code: 'REQUIRED_ID_PARAMETER',
  message: 'The id parameter is missing.',
  statusCode: statusCode.BAD_REQUEST,
});

export const RequestRuntimeServerError = createServerErrorFactory({
  code: 'REQUEST_RUNTIME_SERVER_ERROR',
  message: 'An error occurred while processing the request.',
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});
