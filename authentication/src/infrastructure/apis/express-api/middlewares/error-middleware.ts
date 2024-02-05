import {
  ZodError,
} from 'zod';
import {
  Request,
  Response,
  NextFunction,
} from 'express';
import multer from 'multer';
import {
  ServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  DomainErrorCode,
} from '../../../../domain/entities/error-entity/error-codes';
import {
  InternalServerError,
  RequiredFieldServerError,
  RequestRuntimeServerError,
  InvalidFileParameterServerError,
} from '../../entities/api-entities/api-errors';
import {
  DomainErrorFactory,
} from '../../../../domain/entities/error-entity/error-entities';
import {
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  userServerErrors,
} from '../../entities/domain-entities/user-entity/user-errors';
import {
  avatarServerErrors,
} from '../../entities/domain-entities/avatar-entity/avatar-errors';
import LoggerService from '../../../services/logger-service/logger-service';
import {
  userDetailsServerErrors,
} from '../../entities/domain-entities/user-details-entity/user-details-errors';
import {
  fileServiceServerErrors,
} from '../../entities/service-entities/file-service-entity/file-service-errors';
import {
  tokenServerErrors,
} from '../../entities/service-entities/token-service-entity/token-service-errors';
import {
  socialNetworkServerErrors,
} from '../../entities/domain-entities/social-network-entity/social-network-errors';
import {
  passwordServiceServerErrors,
} from '../../entities/service-entities/password-service-entity/password-service-errors';
import {
  securityServiceServerErrors,
} from '../../entities/service-entities/security-service-entity/security-service-errors';

const domainErrors: Record<DomainErrorCode, ServerErrorFactory> = {
  ...avatarServerErrors,
  ...userServerErrors,
  ...userDetailsServerErrors,
  ...socialNetworkServerErrors,
};

const serviceErrors: Record<ServiceErrorCode, ServerErrorFactory> = {
  ...fileServiceServerErrors,
  ...passwordServiceServerErrors,
  ...securityServiceServerErrors,
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
      error: err.errors.map((e) => e.message).shift(),
    });
  }

  if (err instanceof multer.MulterError) {
    return res.status(InvalidFileParameterServerError.statusCode).json({
      code: InvalidFileParameterServerError.code,
      error: InvalidFileParameterServerError.message,
    });
  }

  if (err instanceof DomainErrorFactory) {
    const { code, message, statusCode } = domainErrors[err.code];
    return res.status(statusCode).json({ code, error: message });
  }

  if (err instanceof ServerErrorFactory) {
    const { code, message, statusCode } = err;
    return res.status(statusCode).json({ code, error: message });
  }

  if (err instanceof ServiceErrorFactory) {
    const { code, message, statusCode } = serviceErrors[err.code];
    return res.status(statusCode).json({ code, error: message });
  }

  return res.status(InternalServerError.statusCode).json({
    code: InternalServerError.code,
    error: InternalServerError.message,
  });
};

export default errorMiddleware;
