import {
  createServerErrorFactory,
} from './server-error-factory';
import statusCode from '../constants/status-codes';

export const AuthorizationSchemeNotSupportedServerError = createServerErrorFactory({
  code: 'AUTHORIZATION_SCHEME_NOT_SUPPORTED',
  message: 'Authorization scheme not supported.',
  statusCode: statusCode.clientSide.unauthorized,
});

export const InternalServerServerError = createServerErrorFactory({
  code: 'INTERNAL_SERVER',
  message: 'An internal server error occurred. Please try again later.',
  statusCode: statusCode.serverSide.internalServer,
});

export const MissingAuthorizationHeaderServerError = createServerErrorFactory({
  code: 'MISSING_AUTHORIZATION_HEADER',
  message: 'Missing authorization header.',
  statusCode: statusCode.clientSide.unauthorized,
});

export const MissingTokenServerError = createServerErrorFactory({
  code: 'MISSING_TOKEN',
  message: 'Missing token.',
  statusCode: statusCode.clientSide.unauthorized,
});
