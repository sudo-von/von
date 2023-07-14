import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const TokenServiceExpiredTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN',
  message: 'Your session has expired.',
});

export const TokenServiceFailedTokenGenerationError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_FAILED_TOKEN_GENERATION',
  message: 'An error occurred during token generation.',
});

export const TokenServiceInvalidTokenError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_INVALID_TOKEN',
  message: 'The provided token is invalid.',
});

export const TokenServiceUnencodedPayloadError = createServiceErrorFactory({
  code: 'TOKEN_SERVICE_UNENCODED_PAYLOAD',
  message: 'The provided token must not use unencoded payload',
});
