export type ServiceErrorCode =
| 'CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_ERROR'
| 'CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_ERROR'
| 'TOKEN_SERVICE_INVALID_GENERATE_TOKEN_ERROR'
| 'TOKEN_SERVICE_INVALID_DECODE_TOKEN_ERROR';

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

export const TOKEN_SERVICE_INVALID_GENERATE_TOKEN: ServiceError = {
  code: 'TOKEN_SERVICE_INVALID_GENERATE_TOKEN_ERROR',
  message: 'There was an error in the generateToken method.',
};

export const TOKEN_SERVICE_DECODE_TOKEN: ServiceError = {
  code: 'TOKEN_SERVICE_INVALID_DECODE_TOKEN_ERROR',
  message: 'There was an error in the decodeToken method.',
};
