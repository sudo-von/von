import {
  UserDomainErrorCode,
  AvatarDomainErrorCode,
  UserDetailsDomainErrorCode,
  SocialNetworkDomainErrorCode,
} from '../../../domain/entities/error-entity/error-codes';
import {
  FileServiceErrorCode,
  TokenServiceErrorCode,
  PasswordServiceErrorCode,
  SecurityServiceErrorCode,
} from '../../services/errors/service-error-codes';

export type ServerError = {
  code: ServerErrorCode;
  message: string;
  statusCode: number;
};

export type ServerErrorCode =
  | APIServerErrorCode
  | AvatarServerErrorCode
  | FileServerErrorCode
  | PasswordServerErrorCode
  | SecurityServerErrorCode
  | SocialNetworkServerErrorCode
  | TokenServerErrorCode
  | UserDetailsServerErrorCode
  | UserServerErrorCode;

export type APIServerErrorCode =
  | 'INTERNAL_SERVER'
  | 'INVALID_ID_PARAMETER'
  | 'INVALID_FILE_PARAMETER'
  | 'REQUIRED_FIELD'
  | 'REQUIRED_ID_PARAMETER'
  | 'REQUEST_RUNTIME_SERVER_ERROR';

export type AvatarServerErrorCode =
  | AvatarDomainErrorCode;

export type FileServerErrorCode =
  | FileServiceErrorCode;

export type PasswordServerErrorCode =
  | PasswordServiceErrorCode;

export type SecurityServerErrorCode =
  | SecurityServiceErrorCode;

export type SocialNetworkServerErrorCode =
  | SocialNetworkDomainErrorCode;

export type TokenServerErrorCode =
  | TokenServiceErrorCode
  | 'AUTHORIZATION_SCHEME_NOT_SUPPORTED'
  | 'MISSING_AUTHORIZATION_HEADER'
  | 'MISSING_TOKEN';

export type UserDetailsServerErrorCode =
  | UserDetailsDomainErrorCode;

export type UserServerErrorCode =
  | UserDomainErrorCode;
