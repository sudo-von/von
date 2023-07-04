import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const TokenServiceInvalidTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_INVALID_TOKEN',
  message: 'Invalid token. Please log in again.',
});

export const TokenServiceExpiredTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN',
  message: 'Token expired. Please log in again.',
});

export const TokenServiceFailedTokenGeneration = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_FAILED_TOKEN_GENERATION',
  message: 'Unable to generate token.',
});
