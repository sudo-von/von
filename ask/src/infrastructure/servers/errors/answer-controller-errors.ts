import {
  createControllerErrorFactory,
} from './controller-error-factory';
import statusCode from '../constants/status-codes';
import {
  AnswerNotFoundError,
  InvalidAnswerLengthError,
} from '../../../domain/entities/answer/answer-errors';

export const AnswerNotFoundControllerError = createControllerErrorFactory({
  code: 'ANSWER_NOT_FOUND',
  message: AnswerNotFoundError.message,
  statusCode: statusCode.clientSide.notFound,
});

export const InvalidAnswerLengthControllerError = createControllerErrorFactory({
  code: 'INVALID_ANSWER_LENGTH',
  message: InvalidAnswerLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});
