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
  userServerErrors,
} from '../../entities/user-dto/user-server-errors';
import {
  DomainErrorFactory,
} from '../../../../domain/errors/error-factory';
import {
  tokenServerErrors,
} from '../../entities/token-dto/token-server-errors';
import {
  RequiredFieldServerError,
  InternalServerServerError,
  RequestRuntimeServerError,
} from '../../entities/api-entities/api-errors';
import {
  answerServerErrors,
} from '../../entities/domain-entities/answer-entity/answer-errors';
import {
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  questionServerErrors,
} from '../../entities/question-dto/question-server-errors';
import LoggerService from '../../../services/logger-service/logger-service';

const domainErrors: Record<DomainErrorCode, ServerErrorFactory> = {
  ...answerServerErrors,
  ...questionServerErrors,
  ...userServerErrors,
};

const serviceErrors: Record<ServiceErrorCode, ServerErrorFactory> = {
  ...tokenServerErrors,
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

  if (err instanceof DomainErrorFactory) {
    const { code, message: error, statusCode } = domainErrors[err.code];
    return res.status(statusCode).json({ code, error });
  }

  if (err instanceof ServerErrorFactory) {
    const { code, message: error, statusCode } = err;
    return res.status(statusCode).json({ code, error });
  }

  if (err instanceof ServiceErrorFactory) {
    const { code, message: error, statusCode } = serviceErrors[err.code];
    return res.status(statusCode).json({ code, error });
  }

  return res.status(InternalServerServerError.statusCode).json({
    code: InternalServerServerError.code,
    error: InternalServerServerError.message,
  });
};

export default errorMiddleware;
