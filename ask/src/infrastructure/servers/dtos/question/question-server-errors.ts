import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionDeleteFailedError,
  QuestionUpdateFailedError,
  InvalidQuestionLengthError,
  QuestionAlreadyAnsweredError,
} from '../../../../domain/entities/question-entity/question-errors';

export const InvalidQuestionLengthServerError = createServerErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  error: InvalidQuestionLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const QuestionAlreadyAnsweredServerError = createServerErrorFactory({
  code: 'QUESTION_ALREADY_ANSWERED',
  error: QuestionAlreadyAnsweredError.message,
  statusCode: statusCode.CONFLICT,
});

export const QuestionDeleteFailedServerError = createServerErrorFactory({
  code: 'QUESTION_DELETE_FAILED',
  error: QuestionDeleteFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const QuestionNotAnsweredServerError = createServerErrorFactory({
  code: 'QUESTION_NOT_ANSWERED',
  error: QuestionNotAnsweredError.message,
  statusCode: statusCode.CONFLICT,
});

export const QuestionNotFoundServerError = createServerErrorFactory({
  code: 'QUESTION_NOT_FOUND',
  error: QuestionNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const QuestionUpdateFailedServerError = createServerErrorFactory({
  code: 'QUESTION_UPDATE_FAILED',
  error: QuestionUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});
