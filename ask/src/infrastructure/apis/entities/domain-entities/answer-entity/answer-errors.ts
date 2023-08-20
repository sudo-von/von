import statusCode from 'http-status-codes';
import {
  APIErrorFactory,
  createServerErrorFactory,
} from '../../../errors/api-error-factory';
import {
  AnswerErrorCode,
} from '../../../../../domain/errors/error-codes';
import {
  AnswerCreateFailedError,
  AnswerDeleteFailedError,
  AnswerUpdateFailedError,
  InvalidAnswerLengthError,
} from '../../../../../domain/entities/answer-entity/answer-errors';

export const AnswerCreateFailedServerError = createServerErrorFactory({
  code: 'ANSWER_CREATE_FAILED',
  message: AnswerCreateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const AnswerDeleteFailedServerError = createServerErrorFactory({
  code: 'ANSWER_DELETE_FAILED',
  message: AnswerDeleteFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const AnswerUpdateFailedServerError = createServerErrorFactory({
  code: 'ANSWER_UPDATE_FAILED',
  message: AnswerUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const InvalidAnswerLengthServerError = createServerErrorFactory({
  code: 'INVALID_ANSWER_LENGTH',
  message: InvalidAnswerLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const answerAPIErrors: Record<AnswerErrorCode, APIErrorFactory> = {
  ANSWER_CREATE_FAILED: AnswerCreateFailedServerError,
  ANSWER_DELETE_FAILED: AnswerDeleteFailedServerError,
  ANSWER_UPDATE_FAILED: AnswerUpdateFailedServerError,
  INVALID_ANSWER_LENGTH: InvalidAnswerLengthServerError,
};
