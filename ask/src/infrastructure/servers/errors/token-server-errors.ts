import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from './server-error-factory';
import {
  TokenServiceExpiredTokenError,
  TokenServiceInvalidTokenError,
} from '../../services/token-service/token-service-errors';

export const TokenServiceExpiredTokenServerError = createServerErrorFactory({
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN',
  message: TokenServiceExpiredTokenError.message,
  statusCode: statusCode.UNAUTHORIZED,
});

export const TokenServiceInvalidTokenServerError = createServerErrorFactory({
  code: 'TOKEN_SERVICE_INVALID_TOKEN',
  message: TokenServiceInvalidTokenError.message,
  statusCode: statusCode.FORBIDDEN,
});
