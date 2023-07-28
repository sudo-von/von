export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| VideoErrorCode
| ContentErrorCode
| UserErrorCode;

export type VideoErrorCode =
| 'INVALID_VIDEO_DOMAIN'
| 'INVALID_VIDEO_URL_LENGTH'
| 'VIDEO_NOT_FOUND'
| 'VIDEO_UPDATE_FAILED';

export type ContentErrorCode =
| 'INVALID_DESCRIPTION_LENGTH'
| 'INVALID_SUBTITLE_LENGTH'
| 'INVALID_TITLE_LENGTH';

export type UserErrorCode =
| 'INVALID_USERNAME_LENGTH'
| 'SINGLE_USER_ONLY'
| 'USER_NOT_FOUND'
| 'USER_UPDATE_FAILED';
