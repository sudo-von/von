export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| AvatarDomainErrorCode
| UserDomainErrorCode;

export type AvatarDomainErrorCode =
| 'INVALID_AVATAR_FILE_MIME_TYPE'
| 'INVALID_AVATAR_FILE_NAME_LENGTH'
| 'INVALID_AVATAR_FILE_SIZE';

export type UserDomainErrorCode =
| 'INVALID_CREDENTIALS'
| 'INVALID_EMAIL_LENGTH'
| 'INVALID_NAME_LENGTH'
| 'INVALID_PASSWORD_LENGTH'
| 'INVALID_USERNAME_LENGTH'
| 'SINGLE_USER_ONLY'
| 'USER_NOT_FOUND'
| 'USER_PERMISSION_DENIED'
| 'USER_UPDATE_FAILED';
