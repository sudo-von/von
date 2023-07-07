import {
  createServerErrorFactory,
} from './server-error-factory';
import statusCode from '../constants/status-codes';
import {
  AnswerNotFoundError,
  InvalidAnswerLengthError,
} from '../../../domain/entities/answer/answer-errors';

export const AnswerNotFoundServerError = createServerErrorFactory({
  code: 'ANSWER_NOT_FOUND',
  message: AnswerNotFoundError.message,
  statusCode: statusCode.clientSide.notFound,
});

export const AnswerUpdateFailedServerError = createServerErrorFactory({
  code: 'ANSWER_UPDATE_FAILED',
  message: AnswerNotFoundError.message,
  statusCode: statusCode.serverSide.internalServer,
});

export const InvalidAnswerLengthServerError = createServerErrorFactory({
  code: 'INVALID_ANSWER_LENGTH',
  message: InvalidAnswerLengthError.message,
  statusCode: statusCode.clientSide.badRequest,
});
