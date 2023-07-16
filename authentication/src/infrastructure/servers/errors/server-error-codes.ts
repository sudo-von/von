import {
  UserDomainErrorCode,
  AvatarDomainErrorCode,
} from '../../../domain/errors/error-codes';
import {
  FileServiceErrorCode,
  PasswordManagerServiceErrorCode,
  SecurityServiceErrorCode,
  TokenServiceErrorCode,
} from '../../services/errors/service-error-codes';

export type ServerError = {
  code: ServerErrorCode;
  error: string;
  statusCode: number;
};

export type ServerErrorCode =
| AvatarServerErrorCode
| CommonServerErrorCode
| FileServerErrorCode
| PasswordManagerServerErrorCode
| SecurityServerErrorCode
| TokenServerErrorCode
| UserServerErrorCode;

export type AvatarServerErrorCode =
| AvatarDomainErrorCode;

export type CommonServerErrorCode =
| 'INTERNAL_SERVER'
| 'INVALID_FILE_PARAMETER_NAME'
| 'REQUIRED_FIELD'
| 'REQUEST_RUNTIME_SERVER_ERROR';

export type FileServerErrorCode =
| FileServiceErrorCode;

export type PasswordManagerServerErrorCode =
| PasswordManagerServiceErrorCode;

export type SecurityServerErrorCode =
| SecurityServiceErrorCode;

export type TokenServerErrorCode =
| TokenServiceErrorCode
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED'
| 'MISSING_AUTHORIZATION_HEADER'
| 'MISSING_TOKEN';

export type UserServerErrorCode =
| UserDomainErrorCode;
