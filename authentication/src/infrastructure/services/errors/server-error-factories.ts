import { createServiceErrorFactory } from './service-error-factory';
import {
  CRYPTOGRAPHY_SERVICE_INVALID_COMPARE,
  CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA,
  TOKEN_SERVICE_EXPIRED_TOKEN,
  TOKEN_SERVICE_INVALID_TOKEN,
} from './service-errors';

export const CryptographyServiceInvalidCompareError = createServiceErrorFactory(
  CRYPTOGRAPHY_SERVICE_INVALID_COMPARE,
);

export const CryptographyServiceInvalidHashDataError = createServiceErrorFactory(
  CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA,
);

export const TokenServiceInvalidTokenError = createServiceErrorFactory(
  TOKEN_SERVICE_INVALID_TOKEN,
);

export const TokenServiceExpiredTokenError = createServiceErrorFactory(
  TOKEN_SERVICE_EXPIRED_TOKEN,
);
