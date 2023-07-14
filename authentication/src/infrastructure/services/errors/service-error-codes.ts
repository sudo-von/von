export type ServiceError = {
  code: ServiceErrorCode;
  message: string;
};

export type ServiceErrorCode =
| SecurityServiceErrorCode
| FileServiceErrorCode
| TokenServiceErrorCode;

export type SecurityServiceErrorCode =
| 'SECURITY_SERVICE_FAILED_CHECKSUM_COMPUTING'
| 'SECURITY_SERVICE_FAILED_HASH_COMPARISON'
| 'SECURITY_SERVICE_FAILED_PASSWORD_HASHING';

export type FileServiceErrorCode =
| 'FILE_SERVICE_FAILED_DELETION'
| 'FILE_SERVICE_FAILED_FILE_UPLOADING'
| 'FILE_SERVICE_ERROR_NO_ENTITY';

export type TokenServiceErrorCode =
| 'TOKEN_SERVICE_EXPIRED_TOKEN'
| 'TOKEN_SERVICE_FAILED_TOKEN_GENERATION'
| 'TOKEN_SERVICE_INVALID_TOKEN'
| 'TOKEN_SERVICE_UNENCODED_PAYLOAD';
