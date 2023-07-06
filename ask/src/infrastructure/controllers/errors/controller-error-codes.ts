import {
  UserErrorCode,
  AnswerErrorCode,
  QuestionErrorCode,
} from '../../../domain/errors/error-codes';
import {
  TokenServiceErrorCode,
} from '../../services/errors/service-error-codes';

export type ControllerError = {
  code: ControllerErrorCode;
  message: string;
  statusCode: number;
};

export type ControllerErrorCode =
| AnswerControllerErrorCode
| QuestionControllerErrorCode
| RequestControllerErrorCode
| TokenServiceControllerErrorCode
| UserControllerErrorCode;

export type AnswerControllerErrorCode =
| AnswerErrorCode;

export type QuestionControllerErrorCode =
| QuestionErrorCode;

export type RequestControllerErrorCode =
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED'
| 'INTERNAL_SERVER'
| 'MISSING_AUTHORIZATION_HEADER'
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED';

export type TokenServiceControllerErrorCode =
| TokenServiceErrorCode;

export type UserControllerErrorCode =
| UserErrorCode;
