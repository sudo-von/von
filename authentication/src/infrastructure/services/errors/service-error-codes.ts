export type ServiceError = {
  code: ServiceErrorCode;
  message: string;
};

export type ServiceErrorCode =
| FileServiceErrorCode
| PasswordManagerServiceErrorCode
| SecurityServiceErrorCode
| TokenServiceErrorCode;

export type FileServiceErrorCode =
| 'FILE_SERVICE_FAILED_DELETION'
| 'FILE_SERVICE_FAILED_FILE_UPLOADING'
| 'FILE_SERVICE_ERROR_NO_ENTITY';

export type PasswordManagerServiceErrorCode =
| 'PASSWORD_MANAGER_SERVICE_FAILED_PASSWORD_COMPARISON'
| 'PASSWORD_MANAGER_SERVICE_FAILED_PASSWORD_HASHING';

export type SecurityServiceErrorCode =
| 'SECURITY_SERVICE_FAILED_TO_HASH';

export type TokenServiceErrorCode =
| 'TOKEN_SERVICE_EXPIRED_TOKEN'
| 'TOKEN_SERVICE_FAILED_TOKEN_GENERATION'
| 'TOKEN_SERVICE_INVALID_TOKEN'
| 'TOKEN_SERVICE_UNENCODED_PAYLOAD';
