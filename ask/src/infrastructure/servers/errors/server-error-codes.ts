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
  message: string;
  statusCode: number;
};

export type ServerErrorCode =
| AnswerServerErrorCode
| QuestionServerErrorCode
| RequestServerErrorCode
| TokenServiceServerErrorCode
| UserServerErrorCode;

export type AnswerServerErrorCode =
| AnswerErrorCode;

export type QuestionServerErrorCode =
| QuestionErrorCode;

export type RequestServerErrorCode =
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED'
| 'INTERNAL_SERVER'
| 'MISSING_AUTHORIZATION_HEADER'
| 'MISSING_TOKEN'
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED';

export type TokenServiceServerErrorCode =
| TokenServiceErrorCode;

export type UserServerErrorCode =
| UserErrorCode;
