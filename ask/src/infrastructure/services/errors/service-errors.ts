export type ServiceErrorCode =
| 'CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_ERROR'
| 'CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_ERROR'
| 'TOKEN_SERVICE_INVALID_TOKEN_ERROR'
| 'TOKEN_SERVICE_EXPIRED_TOKEN_ERROR';

export type ServiceError = {
  code: ServiceErrorCode;
  message: string;
};

export const CRYPTOGRAPHY_SERVICE_INVALID_COMPARE: ServiceError = {
  code: 'CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_ERROR',
  message: 'There was an error in the comparePlainAndHash method.',
};

export const CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA: ServiceError = {
  code: 'CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_ERROR',
  message: 'There was an error in the hashData method.',
};

export const TOKEN_SERVICE_INVALID_TOKEN: ServiceError = {
  code: 'TOKEN_SERVICE_INVALID_TOKEN_ERROR',
  message: 'Invalid token. Please log in again.',
};

export const TOKEN_SERVICE_EXPIRED_TOKEN: ServiceError = {
  code: 'TOKEN_SERVICE_EXPIRED_TOKEN_ERROR',
  message: 'Token expired. Please log in again.',
};
