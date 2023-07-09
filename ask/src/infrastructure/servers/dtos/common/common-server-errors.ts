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
