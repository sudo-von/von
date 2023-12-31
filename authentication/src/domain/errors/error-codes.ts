export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
  | AvatarDomainErrorCode
  | UserDetailsDomainErrorCode
  | UserDomainErrorCode
  | SocialNetworkDomainErrorCode;

export type AvatarDomainErrorCode =
  | 'AVATAR_CREATE_FAILED'
  | 'AVATAR_DELETE_FAILED'
  | 'AVATAR_REPLACE_FAILED'
  | 'INVALID_AVATAR_FILE_EXTENSION'
  | 'INVALID_AVATAR_FILE_MIME_TYPE'
  | 'INVALID_AVATAR_FILE_SIZE'
  | 'NO_AVATAR_STORED_YET';

export type UserDetailsDomainErrorCode =
  | 'INVALID_INTEREST_LENGTH'
  | 'INVALID_POSITION_LENGTH'
  | 'INVALID_QUOTE_LENGTH'
  | 'USER_DETAILS_CREATE_FAILED'
  | 'USER_DETAILS_REPLACE_FAILED';

export type UserDomainErrorCode =
  | 'INVALID_CREDENTIALS'
  | 'INVALID_EMAIL_LENGTH'
  | 'INVALID_NAME_LENGTH'
  | 'INVALID_PASSWORD_LENGTH'
  | 'INVALID_USERNAME_LENGTH'
  | 'NO_USER_CREATED_YET'
  | 'SINGLE_USER_ONLY'
  | 'USER_PERMISSION_DENIED'
  | 'USER_UPDATE_FAILED';

export type SocialNetworkDomainErrorCode =
  | 'INVALID_SOCIAL_NETWORK_FILE_EXTENSION'
  | 'INVALID_SOCIAL_NETWORK_FILE_MIME_TYPE'
  | 'INVALID_SOCIAL_NETWORK_FILE_SIZE'
  | 'INVALID_SOCIAL_NETWORK_NAME_LENGTH'
  | 'INVALID_SOCIAL_NETWORK_URL_LENGTH'
  | 'SOCIAL_NETWORK_CREATE_FAILED'
  | 'SOCIAL_NETWORK_DELETE_FAILED'
  | 'SOCIAL_NETWORK_NOT_FOUND'
  | 'SOCIAL_NETWORK_UPDATE_FAILED';
