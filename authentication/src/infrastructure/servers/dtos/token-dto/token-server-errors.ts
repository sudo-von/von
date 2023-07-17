import statusCode from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InternalServerError,
} from '../common-dto/common-server-errors';
import {
  TokenServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../../../services/token-service/token-service-errors';

export const AuthorizationSchemeNotSupportedServerError = createServerErrorFactory({
  code: 'AUTHORIZATION_SCHEME_NOT_SUPPORTED',
  error: 'Authorization scheme not supported.',
  statusCode: statusCode.UNAUTHORIZED,
});

export const MissingAuthorizationHeaderServerError = createServerErrorFactory({
  code: 'MISSING_AUTHORIZATION_HEADER',
  error: 'Missing authorization header.',
  statusCode: statusCode.UNAUTHORIZED,
});

export const MissingTokenServerError = createServerErrorFactory({
  code: 'MISSING_TOKEN',
  error: 'Missing token.',
  statusCode: statusCode.UNAUTHORIZED,
});

export const TokenServiceExpiredTokenServerError = createServerErrorFactory({
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN',
  error: TokenServiceExpiredTokenError.message,
  statusCode: statusCode.UNAUTHORIZED,
});

export const TokenServiceFailedTokenGenerationServerError = createServerErrorFactory({
  code: 'TOKEN_SERVICE_FAILED_TO_GENERATE_TOKEN',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});

export const TokenServiceInvalidTokenServerError = createServerErrorFactory({
  code: 'TOKEN_SERVICE_INVALID_TOKEN',
  error: TokenServiceInvalidTokenError.message,
  statusCode: statusCode.FORBIDDEN,
});

export const tokenServerErrors: Record<TokenServiceErrorCode, ServerErrorFactory> = {
  TOKEN_SERVICE_EXPIRED_TOKEN: TokenServiceExpiredTokenServerError,
  TOKEN_SERVICE_FAILED_TO_GENERATE_TOKEN: TokenServiceFailedTokenGenerationServerError,
  TOKEN_SERVICE_INVALID_TOKEN: TokenServiceInvalidTokenServerError,
};
