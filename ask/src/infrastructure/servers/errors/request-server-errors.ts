import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from './server-error-factory';

export const AuthorizationSchemeNotSupportedServerError = createServerErrorFactory({
  code: 'AUTHORIZATION_SCHEME_NOT_SUPPORTED',
  message: 'Authorization scheme not supported.',
  statusCode: statusCode.UNAUTHORIZED,
});

export const InternalServerServerError = createServerErrorFactory({
  code: 'INTERNAL_SERVER',
  message: 'An internal server error occurred. Please try again later.',
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const MissingAuthorizationHeaderServerError = createServerErrorFactory({
  code: 'MISSING_AUTHORIZATION_HEADER',
  message: 'Missing authorization header.',
  statusCode: statusCode.UNAUTHORIZED,
});

export const MissingTokenServerError = createServerErrorFactory({
  code: 'MISSING_TOKEN',
  message: 'Missing token.',
  statusCode: statusCode.UNAUTHORIZED,
});
