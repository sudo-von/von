import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const TokenServiceExpiredTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN',
  message: 'Token expired. Please log in again.',
});

export const TokenServiceInvalidTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_INVALID_TOKEN',
  message: 'The provided token is invalid. Please log in again.',
});
