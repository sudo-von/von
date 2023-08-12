import {
  UserDomainErrorCode,
  AvatarDomainErrorCode,
  SocialNetworkDomainErrorCode,
  UserDetailsDomainErrorCode,
} from '../../../domain/errors/error-codes';
import {
  FileServiceErrorCode,
  TokenServiceErrorCode,
  SecurityServiceErrorCode,
  PasswordManagerServiceErrorCode,
} from '../../services/errors/service-error-codes';

export type ServerError = {
  code: ServerErrorCode;
  message: string;
  statusCode: number;
};

export type ServerErrorCode =
| AvatarServerErrorCode
| CommonServerErrorCode
| FileServerErrorCode
| PasswordManagerServerErrorCode
| SecurityServerErrorCode
| SocialNetworkServerErrorCode
| TokenServerErrorCode
| UserDetailsServerErrorCode
| UserServerErrorCode;

export type AvatarServerErrorCode =
| AvatarDomainErrorCode;

export type CommonServerErrorCode =
| 'INTERNAL_SERVER'
| 'INVALID_FILE_PARAMETER'
| 'REQUIRED_FIELD'
| 'REQUEST_RUNTIME_SERVER_ERROR';

export type FileServerErrorCode =
| FileServiceErrorCode;

export type PasswordManagerServerErrorCode =
| PasswordManagerServiceErrorCode;

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
