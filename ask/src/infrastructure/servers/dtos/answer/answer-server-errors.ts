import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  AnswerNotFoundError,
  AnswerDeleteFailedError,
  InvalidAnswerLengthError,
  AnswerCreationFailedError,
} from '../../../../domain/entities/answer/answer-errors';

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

export const AnswerNotFoundServerError = createServerErrorFactory({
  code: 'ANSWER_NOT_FOUND',
  error: AnswerNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const AnswerUpdateFailedServerError = createServerErrorFactory({
  code: 'ANSWER_UPDATE_FAILED',
  error: AnswerNotFoundError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const InvalidAnswerLengthServerError = createServerErrorFactory({
  code: 'INVALID_ANSWER_LENGTH',
  error: InvalidAnswerLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});
