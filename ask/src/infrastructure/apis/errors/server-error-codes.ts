import {
  UserErrorCode,
  AnswerErrorCode,
  QuestionErrorCode,
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
| AnswerServerErrorCode
| CommonServerErrorCode
| QuestionServerErrorCode
| TokenServerErrorCode
| UserServerErrorCode;

export type AnswerServerErrorCode =
| AnswerErrorCode;

export type CommonServerErrorCode =
| 'INTERNAL_SERVER'
| 'REQUIRED_FIELD'
| 'REQUIRED_ID_PARAMETER'
| 'REQUEST_RUNTIME_SERVER_ERROR';

export type QuestionServerErrorCode =
| QuestionErrorCode;

export type TokenServerErrorCode =
| TokenServiceErrorCode
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED'
| 'MISSING_AUTHORIZATION_HEADER'
| 'MISSING_TOKEN';

export type UserServerErrorCode =
| UserErrorCode;
