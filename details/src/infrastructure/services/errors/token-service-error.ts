import { ServiceError } from './service-error-codes';
import { createServiceErrorFactory } from './service-error-factory';

export const TOKEN_SERVICE_INVALID_TOKEN: ServiceError = {
  code: 'TOKEN_SERVICE_INVALID_TOKEN_ERROR',
  message: 'Invalid token. Please log in again.',
};

export const TOKEN_SERVICE_EXPIRED_TOKEN: ServiceError = {
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN_ERROR',
  message: 'Token expired. Please log in again.',
};

export const TokenServiceInvalidTokenError = createServiceErrorFactory(
  TOKEN_SERVICE_INVALID_TOKEN,
);

export const TokenServiceExpiredTokenError = createServiceErrorFactory(
  TOKEN_SERVICE_EXPIRED_TOKEN,
);
