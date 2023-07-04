export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| ProfilePictureDomainErrorCode
| UserDomainErrorCode;

export type ProfilePictureDomainErrorCode =
| 'INVALID_PROFILE_PICTURE_MIME_TYPE_DOMAIN_ERROR'
| 'INVALID_PROFILE_PICTURE_NAME_LENGTH_DOMAIN_ERROR'
| 'INVALID_PROFILE_PICTURE_SIZE_DOMAIN_ERROR';

export type UserDomainErrorCode =
| 'INVALID_CREDENTIALS_DOMAIN_ERROR'
| 'INVALID_EMAIL_LENGTH_DOMAIN_ERROR'
| 'INVALID_USERNAME_LENGTH_DOMAIN_ERROR'
| 'INVALID_NAME_LENGTH_DOMAIN_ERROR'
| 'INVALID_PASSWORD_LENGTH_DOMAIN_ERROR'
| 'SINGLE_USER_ONLY_DOMAIN_ERROR'
| 'USER_NOT_FOUND_DOMAIN_ERROR'
| 'USER_PERMISSION_DENIED_DOMAIN_ERROR'
| 'USER_UPDATE_FAILED_DOMAIN_ERROR';
