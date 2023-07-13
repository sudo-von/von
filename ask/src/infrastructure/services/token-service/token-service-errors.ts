import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const TokenServiceExpiredTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN',
  message: 'Your session has expired.',
});

export const TokenServiceInvalidTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_INVALID_TOKEN',
  message: 'The provided token is invalid.',
});
