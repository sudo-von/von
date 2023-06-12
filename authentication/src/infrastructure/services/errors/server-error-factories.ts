import { createServiceErrorFactory } from './service-error-factory';
import {
  CRYPTOGRAPHY_SERVICE_INVALID_COMPARE,
  CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA,
  TOKEN_SERVICE_DECODE_TOKEN,
  TOKEN_SERVICE_INVALID_GENERATE_TOKEN,
} from './service-errors';

export const CryptographyServiceInvalidCompareError = createServiceErrorFactory(
  CRYPTOGRAPHY_SERVICE_INVALID_COMPARE,
);

export const CryptographyServiceInvalidHashDataError = createServiceErrorFactory(
  CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA,
);

export const TokenServiceInvalidDecodeTokenError = createServiceErrorFactory(
  TOKEN_SERVICE_DECODE_TOKEN,
);

export const TokenServiceInvalidGenerateTokenError = createServiceErrorFactory(
  TOKEN_SERVICE_INVALID_GENERATE_TOKEN,
);
