import {
  UserErrorCode,
  AnswerErrorCode,
  QuestionErrorCode,
} from '../../../domain/errors/error-codes';
import {
  TokenServiceErrorCode,
} from '../../services/errors/service-error-codes';

export type APIError = {
  code: APIErrorCode;
  message: string;
  statusCode: number;
};

export type APIErrorCode =
| AnswerAPIErrorCode
| CommonServerErrorCode
| QuestionAPIErrorCode
| TokenAPIErrorCode
| UserAPIErrorCode;

export type AnswerAPIErrorCode =
| AnswerErrorCode;

export type CommonServerErrorCode =
| 'INTERNAL_SERVER'
| 'INVALID_ID_PARAMETER'
| 'REQUIRED_FIELD'
| 'REQUIRED_ID_PARAMETER'
| 'REQUEST_RUNTIME_SERVER_ERROR';

export type QuestionAPIErrorCode =
| QuestionErrorCode;

export type TokenAPIErrorCode =
| TokenServiceErrorCode
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED'
| 'MISSING_AUTHORIZATION_HEADER'
| 'MISSING_TOKEN';

export type UserAPIErrorCode =
| UserErrorCode;
