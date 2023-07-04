export type ServiceError = {
  code: ServiceErrorCode;
  message: string;
};

export type ServiceErrorCode =
| SecurityServiceErrorCode
| FileServiceErrorCode
| TokenServiceErrorCode;

export type SecurityServiceErrorCode =
| 'SECURITY_SERVICE_UNCAUGHT_COMPARE_HASHES'
| 'SECURITY_SERVICE_UNCAUGHT_COMPUTE_CHECKSUM'
| 'SECURITY_SERVICE_UNCAUGHT_HASH_PASSWORD';

export type FileServiceErrorCode =
| 'FILE_SERVICE_ENOENT'
| 'FILE_SERVICE_UNCAUGHT_DELETE'
| 'FILE_SERVICE_UNCAUGHT_STORE';

export type TokenServiceErrorCode =
| 'TOKEN_SERVICE_INVALID_TOKEN'
| 'TOKEN_SERVICE_EXPIRED_TOKEN'
| 'TOKEN_SERVICE_FAILED_TOKEN_GENERATION';
