export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| UserDomainErrorCode;

export type UserDomainErrorCode =
| 'INVALID_USERNAME_LENGTH'
| 'SINGLE_USER_ONLY'
| 'USER_PERMISSION_DENIED'
| 'USER_UPDATE_FAILED';
