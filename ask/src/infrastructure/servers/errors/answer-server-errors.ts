import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from './server-error-factory';
import {
  AnswerDeleteFailedError,
  AnswerNotFoundError,
  InvalidAnswerLengthError,
} from '../../../domain/entities/answer/answer-errors';

export const AnswerNotFoundServerError = createServerErrorFactory({
  code: 'ANSWER_NOT_FOUND',
  message: AnswerNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const AnswerDeleteFailedServerError = createServerErrorFactory({
  code: 'ANSWER_DELETE_FAILED',
  message: AnswerDeleteFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const AnswerUpdateFailedServerError = createServerErrorFactory({
  code: 'ANSWER_UPDATE_FAILED',
  message: AnswerNotFoundError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const InvalidAnswerLengthServerError = createServerErrorFactory({
  code: 'INVALID_ANSWER_LENGTH',
  message: InvalidAnswerLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});
