export type ServiceError = {
  code: ServiceErrorCode;
  message: string;
};

export type ServiceErrorCode =
| CryptographyServiceErrorCode
| FileServiceErrorCode
| TokenServiceErrorCode;

export type CryptographyServiceErrorCode =
| 'CRYPTOGRAPHY_SERVICE_INVALID_COMPARE_ERROR'
| 'CRYPTOGRAPHY_SERVICE_INVALID_HASH_DATA_ERROR';

export type FileServiceErrorCode =
| 'FILE_SERVICE_INVALID_STORE_ERROR';

export type TokenServiceErrorCode =
| 'TOKEN_SERVICE_INVALID_TOKEN_ERROR'
| 'TOKEN_SERVICE_EXPIRED_TOKEN_ERROR'
| 'TOKEN_SERVICE_FAILED_TOKEN_GENERATION_ERROR';
