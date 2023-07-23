export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| UserErrorCode;

export type UserErrorCode =
| 'INVALID_USERNAME_LENGTH'
| 'SINGLE_USER_ONLY'
| 'USER_NOT_FOUND'
| 'USER_UPDATE_FAILED';
