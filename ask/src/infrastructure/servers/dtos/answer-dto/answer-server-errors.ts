import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  AnswerUpdateFailedError,
  AnswerDeleteFailedError,
  InvalidAnswerLengthError,
  AnswerCreationFailedError,
} from '../../../../domain/entities/answer-entity/answer-errors';

export const AnswerCreationFailedServerError = createServerErrorFactory({
  code: 'ANSWER_CREATION_FAILED',
  error: AnswerCreationFailedError.message,
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
