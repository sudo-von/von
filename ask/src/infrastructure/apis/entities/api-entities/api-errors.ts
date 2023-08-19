import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';

export const InternalServerServerError = createServerErrorFactory({
  code: 'INTERNAL_SERVER',
  error: 'An internal server error occurred. Please try again later.',
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const RequiredFieldServerError = createServerErrorFactory({
  code: 'REQUIRED_FIELD',
  error: 'Please fill in all mandatory fields.',
  statusCode: statusCode.BAD_REQUEST,
});

export const RequiredIdParameterServerError = createServerErrorFactory({
  code: 'REQUIRED_ID_PARAMETER',
  error: 'The id parameter is missing.',
  statusCode: statusCode.BAD_REQUEST,
});

export const RequestRuntimeServerError = createServerErrorFactory({
  code: 'REQUEST_RUNTIME_SERVER_ERROR',
  error: 'An error occurred while processing the request.',
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});
