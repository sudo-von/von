export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| ProfilePictureDomainErrorCode
| UserDomainErrorCode;

export type ProfilePictureDomainErrorCode =
| 'INVALID_PROFILE_PICTURE_MIME_TYPE'
| 'INVALID_PROFILE_PICTURE_NAME_LENGTH'
| 'INVALID_PROFILE_PICTURE_SIZE';

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
