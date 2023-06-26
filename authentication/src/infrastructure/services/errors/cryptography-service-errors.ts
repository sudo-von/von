import {
  ServiceError,
} from './service-error-codes';
import {
  createServiceErrorFactory,
} from './service-error-factory';

export const CRYPTOGRAPHY_SERVICE_INVALID_COMPARE: ServiceError = {
  code: 'CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_ERROR',
  message: 'There was an error in the comparePlainAndHash method.',
};

export const CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA: ServiceError = {
  code: 'CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_ERROR',
  message: 'There was an error in the hashData method.',
};

export const CryptographyServiceInvalidCompareError = createServiceErrorFactory(
  CRYPTOGRAPHY_SERVICE_INVALID_COMPARE,
);

export const CryptographyServiceInvalidHashDataError = createServiceErrorFactory(
  CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA,
);
