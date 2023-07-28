import {
  VideoErrorCode,
  UserErrorCode,
  ContentErrorCode,
  VectorErrorCode,
} from '../../../domain/errors/error-codes';
import {
  FileServiceErrorCode,
  SecurityServiceErrorCode,
  TokenServiceErrorCode,
} from '../../services/errors/service-error-codes';

export type ServerError = {
  code: ServerErrorCode;
  error: string;
  statusCode: number;
};

export type ServerErrorCode =
| VideoServerErrorCode
| CommonServerErrorCode
| ContentServerErrorCode
| TokenServerErrorCode
| UserServerErrorCode
| FileServerErrorCode
| SecurityServerErrorCode
| VectorServerErrorCode;

export type VideoServerErrorCode =
| VideoErrorCode;

export type CommonServerErrorCode =
| 'INTERNAL_SERVER'
| 'REQUIRED_FIELD'
| 'REQUEST_RUNTIME_SERVER_ERROR';

export type ContentServerErrorCode =
| ContentErrorCode;

export type TokenServerErrorCode =
| TokenServiceErrorCode
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED'
| 'MISSING_AUTHORIZATION_HEADER'
| 'MISSING_TOKEN';

export type UserServerErrorCode =
| UserErrorCode;

export type FileServerErrorCode =
| FileServiceErrorCode;

export type SecurityServerErrorCode =
| SecurityServiceErrorCode;

export type VectorServerErrorCode =
| VectorErrorCode;
