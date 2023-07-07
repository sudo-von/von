import {
  createServerErrorFactory,
} from './server-error-factory';
import statusCode from '../constants/status-codes';
import {
  QuestionNotFoundError,
  QuestionNotAnsweredError,
  QuestionUpdateFailedError,
  InvalidQuestionLengthError,
  QuestionAlreadyAnsweredError,
} from '../../../domain/entities/question/question-errors';

export const InvalidQuestionLengthServerError = createServerErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  message: InvalidQuestionLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const QuestionAlreadyAnsweredServerError = createServerErrorFactory({
  code: 'QUESTION_ALREADY_ANSWERED',
  message: QuestionAlreadyAnsweredError.message,
  statusCode: statusCode.clientSide.conflict,
});

export const QuestionNotAnsweredServerError = createServerErrorFactory({
  code: 'QUESTION_NOT_ANSWERED',
  message: QuestionNotAnsweredError.message,
  statusCode: statusCode.clientSide.conflict,
});

export const QuestionNotFoundServerError = createServerErrorFactory({
  code: 'QUESTION_NOT_FOUND',
  message: QuestionNotFoundError.message,
  statusCode: statusCode.clientSide.notFound,
});

export const QuestionUpdateFailedServerError = createServerErrorFactory({
  code: 'QUESTION_UPDATE_FAILED',
  message: QuestionUpdateFailedError.message,
  statusCode: statusCode.serverSide.internalServer,
});
