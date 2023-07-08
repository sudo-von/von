import statusCode from 'http-status-codes';
import {
  createServerErrorFactory,
} from './server-error-factory';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionUpdateFailedError,
  InvalidQuestionLengthError,
  QuestionAlreadyAnsweredError,
  QuestionDeleteFailedError,
} from '../../../domain/entities/question/question-errors';

export const InvalidQuestionLengthServerError = createServerErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  message: InvalidQuestionLengthError.message,
  statusCode: statusCode.BAD_REQUEST,
});

export const QuestionAlreadyAnsweredServerError = createServerErrorFactory({
  code: 'QUESTION_ALREADY_ANSWERED',
  message: QuestionAlreadyAnsweredError.message,
  statusCode: statusCode.CONFLICT,
});

export const QuestionDeleteFailedServerError = createServerErrorFactory({
  code: 'QUESTION_DELETE_FAILED',
  message: QuestionDeleteFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});

export const QuestionNotAnsweredServerError = createServerErrorFactory({
  code: 'QUESTION_NOT_ANSWERED',
  message: QuestionNotAnsweredError.message,
  statusCode: statusCode.CONFLICT,
});

export const QuestionNotFoundServerError = createServerErrorFactory({
  code: 'QUESTION_NOT_FOUND',
  message: QuestionNotFoundError.message,
  statusCode: statusCode.NOT_FOUND,
});

export const QuestionUpdateFailedServerError = createServerErrorFactory({
  code: 'QUESTION_UPDATE_FAILED',
  message: QuestionUpdateFailedError.message,
  statusCode: statusCode.INTERNAL_SERVER_ERROR,
});
