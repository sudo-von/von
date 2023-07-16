import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';

export const InternalServerError = createServerErrorFactory({
  code: 'INTERNAL_SERVER',
  error: 'An internal server error occurred. Please try again later.',
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const InvalidFileParameterServerError = createServerErrorFactory({
  code: 'INVALID_FILE_PARAMETER_NAME',
  error: 'The specified parameter for uploading a file is incorrect or empty.',
  statusCode: statusCode.BAD_REQUEST,
});

export const RequiredFieldServerError = createServerErrorFactory({
  code: 'REQUIRED_FIELD',
  error: 'Please fill in all mandatory fields.',
  statusCode: statusCode.BAD_REQUEST,
});

export const RequestRuntimeServerError = createServerErrorFactory({
  code: 'REQUEST_RUNTIME_SERVER_ERROR',
  error: 'An error occurred while processing the request.',
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});
