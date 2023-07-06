import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../status-codes';
import {
  QuestionNotAnsweredError,
  QuestionNotFoundError,
  QuestionAlreadyAnsweredError,
  QuestionUpdateFailedError,
  InvalidQuestionLengthError,
} from '../../../domain/entities/question/question-errors';

export const InvalidQuestionLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  message: InvalidQuestionLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});

export const QuestionAlreadyAnsweredControllerError = createControllerErrorFactory({
  code: 'QUESTION_ALREADY_ANSWERED',
  message: QuestionAlreadyAnsweredError.message,
  statusCode: statusCode.clientSide.conflict,
});

export const QuestionNotAnsweredControllerError = createControllerErrorFactory({
  code: 'QUESTION_NOT_ANSWERED',
  message: QuestionNotAnsweredError.message,
  statusCode: statusCode.clientSide.conflict,
});

export const QuestionNotFoundControllerError = createControllerErrorFactory({
  code: 'QUESTION_NOT_FOUND',
  message: QuestionNotFoundError.message,
  statusCode: statusCode.clientSide.notFound,
});

export const QuestionUpdateFailedControllerError = createControllerErrorFactory({
  code: 'QUESTION_UPDATE_FAILED',
  message: QuestionUpdateFailedError.message,
  statusCode: statusCode.serverSide.internalServer,
});
