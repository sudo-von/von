export type ServiceError = {
  code: ServiceErrorCode;
  message: string;
};

export type ServiceErrorCode =
| TokenServiceErrorCode
| CryptographyServiceErrorCode;

export type TokenServiceErrorCode =
| 'TOKEN_SERVICE_INVALID_TOKEN_ERROR'
| 'TOKEN_SERVICE_EXPIRED_TOKEN_ERROR';

export type CryptographyServiceErrorCode =
| 'CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_ERROR'
| 'CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_ERROR';
