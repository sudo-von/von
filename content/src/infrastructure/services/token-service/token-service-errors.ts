import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const TokenServiceInvalidTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_INVALID_TOKEN_ERROR',
  message: 'Invalid token. Please log in again.',
});

export const TokenServiceExpiredTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN_ERROR',
  message: 'Token expired. Please log in again.',
});
