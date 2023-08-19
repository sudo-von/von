import statusCode from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../../errors/server-error-factory';
import {
  TokenServiceErrorCode,
} from '../../../../services/errors/service-error-codes';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../../../../services/token-service/token-service-errors';

export const AuthorizationSchemeNotSupportedServerError = createServerErrorFactory({
  code: 'AUTHORIZATION_SCHEME_NOT_SUPPORTED',
  message: 'Authorization scheme not supported.',
  statusCode: statusCode.UNAUTHORIZED,
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

export const ExpiredTokenServerError = createServerErrorFactory({
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN',
  message: TokenServiceExpiredTokenError.message,
  statusCode: statusCode.UNAUTHORIZED,
});

export const InvalidTokenServerError = createServerErrorFactory({
  code: 'TOKEN_SERVICE_INVALID_TOKEN',
  message: TokenServiceInvalidTokenError.message,
  statusCode: statusCode.FORBIDDEN,
});

export const tokenServerErrors: Record<TokenServiceErrorCode, ServerErrorFactory> = {
  TOKEN_SERVICE_EXPIRED_TOKEN: ExpiredTokenServerError,
  TOKEN_SERVICE_INVALID_TOKEN: InvalidTokenServerError,
};
