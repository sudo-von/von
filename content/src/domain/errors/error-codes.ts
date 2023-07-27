export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| ContentErrorCode
| UserErrorCode
| VideoErrorCode;

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

export type VideoErrorCode =
| 'INVALID_VIDEO_ALT_LENGTH'
| 'INVALID_VIDEO_URL_LENGTH'
| 'VIDEO_ALREADY_CREATED'
| 'VIDEO_CREATION_FAILED'
| 'VIDEO_NOT_FOUND'
| 'VIDEO_UPDATE_FAILED';
