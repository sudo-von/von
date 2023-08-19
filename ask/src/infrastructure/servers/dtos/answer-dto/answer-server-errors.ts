import statusCode from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  AnswerErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  AnswerUpdateFailedError,
  AnswerDeleteFailedError,
  InvalidAnswerLengthError,
  AnswerCreateFailedError,
} from '../../../../domain/entities/answer-entity/answer-errors';

export const AnswerCreationFailedServerError = createServerErrorFactory({
  code: 'ANSWER_CREATION_FAILED',
  error: AnswerCreateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const AnswerDeleteFailedServerError = createServerErrorFactory({
  code: 'ANSWER_DELETE_FAILED',
  error: AnswerDeleteFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const AnswerUpdateFailedServerError = createServerErrorFactory({
  code: 'ANSWER_UPDATE_FAILED',
  error: AnswerUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const InvalidAnswerLengthServerError = createServerErrorFactory({
  code: 'INVALID_ANSWER_LENGTH',
  error: InvalidAnswerLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const answerServerErrors: Record<AnswerErrorCode, ServerErrorFactory> = {
  ANSWER_CREATION_FAILED: AnswerCreationFailedServerError,
  ANSWER_DELETE_FAILED: AnswerDeleteFailedServerError,
  ANSWER_UPDATE_FAILED: AnswerUpdateFailedServerError,
  INVALID_ANSWER_LENGTH: InvalidAnswerLengthServerError,
};
