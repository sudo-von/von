import {
  VideoErrorCode,
  UserErrorCode,
  ContentErrorCode,
} from '../../../domain/errors/error-codes';
import {
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
| UserServerErrorCode;

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
