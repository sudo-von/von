import {
  ZodError,
} from 'zod';
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  ServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  DomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  UserNotFoundServerError,
  SingleUserOnlyServerError,
  UserUpdateFailedServerError,
  InvalidUsernameLengthServerError,
} from '../../dtos/user-dto/user-server-errors';
import {
  DomainErrorFactory,
} from '../../../../domain/errors/error-factory';
import {
  ExpiredTokenServerError,
  InvalidTokenServerError,
} from '../../dtos/token-dto/token-server-errors';
import {
  RequiredFieldServerError,
  InternalServerServerError,
  RequestRuntimeServerError,
} from '../../dtos/common-dto/common-server-errors';
import {
  AnswerDeleteFailedServerError,
  AnswerUpdateFailedServerError,
  InvalidAnswerLengthServerError,
  AnswerCreationFailedServerError,
} from '../../dtos/answer-dto/answer-server-errors';
import {
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  QuestionNotFoundServerError,
  QuestionNotAnsweredServerError,
  QuestionDeleteFailedServerError,
  QuestionUpdateFailedServerError,
  InvalidQuestionLengthServerError,
  QuestionAlreadyAnsweredServerError,
} from '../../dtos/question-dto/question-server-errors';
import LoggerService from '../../../services/logger-service/logger-service';

const domainErrors: Record<DomainErrorCode, ServerErrorFactory> = {
  ANSWER_CREATION_FAILED: AnswerCreationFailedServerError,
  ANSWER_DELETE_FAILED: AnswerDeleteFailedServerError,
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
  USER_UPDATE_FAILED: UserUpdateFailedServerError,
};

const serviceErrors: Record<ServiceErrorCode, ServerErrorFactory> = {
  TOKEN_SERVICE_EXPIRED_TOKEN: ExpiredTokenServerError,
  TOKEN_SERVICE_INVALID_TOKEN: InvalidTokenServerError,
};

const errorMiddleware = (loggerService: LoggerService) => (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  loggerService.error(RequestRuntimeServerError.message, err);

  if (err instanceof ZodError) {
    return res.status(RequiredFieldServerError.statusCode).json({
      code: RequiredFieldServerError.code,
      errors: err.errors.map((e) => e.message),
    });
  }

  if (err instanceof ServerErrorFactory) {
    const { code, error, statusCode } = err;
    return res.status(statusCode).json({ code, error });
  }

  if (err instanceof DomainErrorFactory) {
    const { code, error, statusCode } = domainErrors[err.code];
    return res.status(statusCode).json({ code, error });
  }

  if (err instanceof ServiceErrorFactory) {
    const { code, error, statusCode } = serviceErrors[err.code];
    return res.status(statusCode).json({ code, error });
  }

  return res.status(InternalServerServerError.statusCode).json({
    code: InternalServerServerError.code,
    error: InternalServerServerError.error,
  });
};

export default errorMiddleware;
