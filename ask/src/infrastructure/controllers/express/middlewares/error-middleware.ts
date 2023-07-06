import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  UserNotFoundControllerError,
  SingleUserOnlyControllerError,
  UserUpdateFailedControllerError,
  UserPermissionDeniedControllerError,
  InvalidUsernameLengthControllerError,
} from '../../errors/user-controller-errors';
import {
  AnswerNotFoundControllerError,
  InvalidAnswerLengthControllerError,
} from '../../errors/answer-controller-errors';
import {
  InternalServerControllerError,
} from '../../errors/request-controller-errors';
import {
  ControllerErrorFactory,
} from '../../errors/controller-error-factory';
import {
  DomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  DomainErrorFactory,
} from '../../../../domain/errors/error-factory';
import {
  QuestionNotFoundControllerError,
  QuestionNotAnsweredControllerError,
  QuestionUpdateFailedControllerError,
  InvalidQuestionLengthControllerError,
  QuestionAlreadyAnsweredControllerError,
} from '../../errors/question-controller-errors';
import {
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  TokenServiceExpiredTokenControllerError,
  TokenServiceInvalidTokenControllerError,
} from '../../errors/token-service-controller-errors';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  MessageBrokerErrorFactory,
} from '../../../message-brokers/errors/message-broker-error-factory';

const domainErrors: Record<DomainErrorCode, ControllerErrorFactory> = {
  ANSWER_NOT_FOUND: AnswerNotFoundControllerError,
  INVALID_ANSWER_LENGTH: InvalidAnswerLengthControllerError,
  INVALID_QUESTION_LENGTH: InvalidQuestionLengthControllerError,
  INVALID_USERNAME_LENGTH: InvalidUsernameLengthControllerError,
  QUESTION_ALREADY_ANSWERED: QuestionAlreadyAnsweredControllerError,
  QUESTION_NOT_ANSWERED: QuestionNotAnsweredControllerError,
  QUESTION_NOT_FOUND: QuestionNotFoundControllerError,
  QUESTION_UPDATE_FAILED: QuestionUpdateFailedControllerError,
  SINGLE_USER_ONLY: SingleUserOnlyControllerError,
  USER_NOT_FOUND: UserNotFoundControllerError,
  USER_PERMISSION_DENIED: UserPermissionDeniedControllerError,
  USER_UPDATE_FAILED: UserUpdateFailedControllerError,
};

const serviceErrors: Record<ServiceErrorCode, ControllerErrorFactory> = {
  TOKEN_SERVICE_EXPIRED_TOKEN: TokenServiceExpiredTokenControllerError,
  TOKEN_SERVICE_INVALID_TOKEN: TokenServiceInvalidTokenControllerError,
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

  if (error instanceof ControllerErrorFactory) {
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

  return res.status(InternalServerControllerError.statusCode).json({
    code: InternalServerControllerError.code,
    error: InternalServerControllerError.message,
  });
};

export default errorMiddleware;
