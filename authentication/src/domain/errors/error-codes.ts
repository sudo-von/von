export type DomainError = {
  code: DomainErrorCode;
  error: string;
};

export type DomainErrorCode =
| AvatarDomainErrorCode
| UserDetailsDomainErrorCode
| UserDomainErrorCode;

export type AvatarDomainErrorCode =
| 'AVATAR_REPLACEMENT_FAILED'
| 'INVALID_AVATAR_FILE_MIME_TYPE'
| 'INVALID_AVATAR_FILE_SIZE';

export type UserDetailsDomainErrorCode =
| 'INVALID_QUOTE_LENGTH'
| 'INVALID_INTEREST_LENGTH'
| 'INVALID_POSITION_LENGTH'
| 'USER_DETAILS_REPLACEMENT_FAILED';

export type UserDomainErrorCode =
| 'INVALID_CREDENTIALS'
| 'INVALID_EMAIL_LENGTH'
| 'INVALID_NAME_LENGTH'
| 'INVALID_PASSWORD_LENGTH'
| 'INVALID_USERNAME_LENGTH'
| 'SINGLE_USER_ONLY'
| 'USER_NOT_FOUND'
| 'USER_UPDATE_FAILED';
