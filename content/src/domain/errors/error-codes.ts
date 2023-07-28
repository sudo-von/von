export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| ContentErrorCode
| UserErrorCode
| VideoErrorCode
| VectorErrorCode;

export type ContentErrorCode =
| 'INVALID_DESCRIPTION_LENGTH'
| 'INVALID_SUBTITLE_LENGTH'
| 'INVALID_TITLE_LENGTH';

export type UserErrorCode =
| 'INVALID_USERNAME_LENGTH'
| 'SINGLE_USER_ONLY'
| 'USER_NOT_FOUND'
| 'USER_UPDATE_FAILED';

export type VideoErrorCode =
| 'INVALID_VIDEO_DOMAIN'
| 'INVALID_VIDEO_URL_LENGTH'
| 'VIDEO_NOT_FOUND'
| 'VIDEO_UPDATE_FAILED';

export type VectorErrorCode =
| 'INVALID_VECTOR_DESCRIPTION_LENGTH'
| 'INVALID_VECTOR_FILE_MIME_TYPE'
| 'INVALID_VECTOR_FILE_SIZE'
| 'VECTOR_CREATION_FAILED'
| 'VECTOR_NOT_FOUND'
| 'VECTOR_UPDATE_FAILED';
