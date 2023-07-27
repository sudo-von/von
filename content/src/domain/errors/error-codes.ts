export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| AboutErrorCode
| ContentErrorCode
| UserErrorCode;

export type AboutErrorCode =
| 'INVALID_ABOUT_DOMAIN'
| 'INVALID_ABOUT_URL_LENGTH'
| 'ABOUT_ALREADY_CREATED'
| 'ABOUT_NOT_CREATED_YET'
| 'ABOUT_NOT_FOUND'
| 'ABOUT_UPDATE_FAILED';

export type ContentErrorCode =
| 'CONTENT_UPDATE_FAILED'
| 'CONTENT_NOT_FOUND'
| 'INVALID_DESCRIPTION_LENGTH'
| 'INVALID_SUBTITLE_LENGTH'
| 'INVALID_TITLE_LENGTH';

export type UserErrorCode =
| 'INVALID_USERNAME_LENGTH'
| 'SINGLE_USER_ONLY'
| 'USER_NOT_FOUND'
| 'USER_UPDATE_FAILED';
