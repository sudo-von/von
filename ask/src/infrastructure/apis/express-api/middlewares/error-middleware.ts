import {
  ZodError,
} from 'zod';
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  APIErrorFactory,
} from '../../errors/api-error-factory';
import {
  DomainErrorCode,
} from '../../../../domain/errors/error-codes';
import {
  RequiredFieldServerError,
  InternalServerServerError,
  RequestRuntimeServerError,
} from '../../entities/api-entities/api-errors';
import {
  DomainErrorFactory,
} from '../../../../domain/errors/error-factory';
import {
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  userAPIErrors,
} from '../../entities/domain-entities/user-entity/user-errors';
import {
  answerAPIErrors,
} from '../../entities/domain-entities/answer-entity/answer-errors';
import {
  questionAPIErrors,
} from '../../entities/domain-entities/question-entity/question-errors';
import LoggerService from '../../../services/logger-service/logger-service';
import {
  tokenAPIErrors,
} from '../../entities/service-entities/token-service-entity/token-service-errors';

const domainErrors: Record<DomainErrorCode, APIErrorFactory> = {
  ...answerAPIErrors,
  ...questionAPIErrors,
  ...userAPIErrors,
};

const serviceErrors: Record<ServiceErrorCode, APIErrorFactory> = {
  ...tokenAPIErrors,
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
      error: err.errors.map((e) => e.message).shift(),
    });
  }

  if (err instanceof DomainErrorFactory) {
    const { code, message, statusCode } = domainErrors[err.code];
    return res.status(statusCode).json({ code, error: message });
  }

  if (err instanceof APIErrorFactory) {
    const { code, message, statusCode } = err;
    return res.status(statusCode).json({ code, error: message });
  }

  if (err instanceof ServiceErrorFactory) {
    const { code, message, statusCode } = serviceErrors[err.code];
    return res.status(statusCode).json({ code, error: message });
  }

  return res.status(InternalServerServerError.statusCode).json({
    code: InternalServerServerError.code,
    error: InternalServerServerError.message,
  });
};

export default errorMiddleware;
