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
| 'FILE_SERVICE_ENTITY_NOT_FOUND'
| 'FILE_SERVICE_FAILED_TO_DELETE'
| 'FILE_SERVICE_FAILED_TO_UPLOAD';

export type PasswordManagerServiceErrorCode =
| 'PASSWORD_MANAGER_SERVICE_FAILED_TO_COMPARE'
| 'PASSWORD_MANAGER_SERVICE_FAILED_TO_HASH';

export type SecurityServiceErrorCode =
| 'SECURITY_SERVICE_FAILED_TO_HASH';

export type TokenServiceErrorCode =
| 'TOKEN_SERVICE_EXPIRED_TOKEN'
| 'TOKEN_SERVICE_FAILED_TO_GENERATE_TOKEN'
| 'TOKEN_SERVICE_INVALID_TOKEN';
