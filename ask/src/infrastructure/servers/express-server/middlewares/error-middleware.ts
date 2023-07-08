import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  UserNotFoundServerError,
  SingleUserOnlyServerError,
  UserUpdateFailedServerError,
  UserPermissionDeniedServerError,
  InvalidUsernameLengthServerError,
} from '../../errors/user-server-errors';
import {
  ServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  AnswerNotFoundServerError,
  AnswerDeleteFailedServerError,
  AnswerUpdateFailedServerError,
  InvalidAnswerLengthServerError,
} from '../../errors/answer-server-errors';
import {
  InternalServerServerError,
} from '../../errors/request-server-errors';
import {
  QuestionNotFoundServerError,
  QuestionNotAnsweredServerError,
  QuestionDeleteFailedServerError,
  QuestionUpdateFailedServerError,
  InvalidQuestionLengthServerError,
  QuestionAlreadyAnsweredServerError,
} from '../../errors/question-server-errors';
import {
  DomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  DomainErrorFactory,
} from '../../../../domain/errors/error-factory';
import {
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  TokenServiceExpiredTokenServerError,
  TokenServiceInvalidTokenServerError,
} from '../../errors/token-server-errors';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  MessageBrokerErrorFactory,
} from '../../../message-brokers/errors/message-broker-error-factory';

const domainErrors: Record<DomainErrorCode, ServerErrorFactory> = {
  ANSWER_DELETE_FAILED: AnswerDeleteFailedServerError,
  ANSWER_NOT_FOUND: AnswerNotFoundServerError,
  ANSWER_UPDATE_FAILED: AnswerUpdateFailedServerError,
  INVALID_ANSWER_LENGTH: InvalidAnswerLengthServerError,
  INVALID_QUESTION_LENGTH: InvalidQuestionLengthServerError,
  INVALID_USERNAME_LENGTH: InvalidUsernameLengthServerError,
  QUESTION_ALREADY_ANSWERED: QuestionAlreadyAnsweredServerError,
  QUESTION_DELETE_FAILED: QuestionDeleteFailedServerError,
  QUESTION_NOT_ANSWERED: QuestionNotAnsweredServerError,
  QUESTION_NOT_FOUND: QuestionNotFoundServerError,
  QUESTION_UPDATE_FAILED: QuestionUpdateFailedServerError,
  SINGLE_USER_ONLY: SingleUserOnlyServerError,
  USER_NOT_FOUND: UserNotFoundServerError,
  USER_PERMISSION_DENIED: UserPermissionDeniedServerError,
  USER_UPDATE_FAILED: UserUpdateFailedServerError,
};

const serviceErrors: Record<ServiceErrorCode, ServerErrorFactory> = {
  TOKEN_SERVICE_EXPIRED_TOKEN: TokenServiceExpiredTokenServerError,
  TOKEN_SERVICE_INVALID_TOKEN: TokenServiceInvalidTokenServerError,
};

const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof MessageBrokerErrorFactory) {
    return res.end();
  }

  if (error instanceof ServerErrorFactory) {
    return res.status(error.statusCode).json({ code: error.code, error: error.message });
  }

  if (error instanceof DomainErrorFactory) {
    const { code, message, statusCode } = domainErrors[error.code];
    return res.status(statusCode).json({ code, error: message });
  }

  if (error instanceof ServiceErrorFactory) {
    const { code, message, statusCode } = serviceErrors[error.code];
    return res.status(statusCode).json({ code, error: message });
  }

  return res.status(InternalServerServerError.statusCode).json({
    code: InternalServerServerError.code,
    error: InternalServerServerError.message,
  });
};

export default errorMiddleware;
