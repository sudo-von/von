import statusCode from 'http-status-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../../errors/server-error-factory';
import {
  QuestionErrorCode,
} from '../../../../../domain/errors/error-codes';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionDeleteFailedError,
  QuestionUpdateFailedError,
  InvalidQuestionLengthError,
  QuestionAlreadyAnsweredError,
} from '../../../../../domain/entities/question-entity/question-errors';

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

export const questionServerErrors: Record<QuestionErrorCode, ServerErrorFactory> = {
  INVALID_QUESTION_LENGTH: InvalidQuestionLengthServerError,
  QUESTION_ALREADY_ANSWERED: QuestionAlreadyAnsweredServerError,
  QUESTION_DELETE_FAILED: QuestionDeleteFailedServerError,
  QUESTION_NOT_ANSWERED: QuestionNotAnsweredServerError,
  QUESTION_NOT_FOUND: QuestionNotFoundServerError,
  QUESTION_UPDATE_FAILED: QuestionUpdateFailedServerError,
};
