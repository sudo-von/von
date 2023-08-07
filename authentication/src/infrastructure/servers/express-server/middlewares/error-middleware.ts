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
} from '../../../../domain/errors/error-codes';
import {
  fileServerErrors,
} from '../../dtos/file-dto/file-server-errors';
import {
  userServerErrors,
} from '../../dtos/user-dto/user-server-errors';
import {
  DomainErrorFactory,
} from '../../../../domain/errors/error-factory';
import {
  tokenServerErrors,
} from '../../dtos/token-dto/token-server-errors';
import {
  avatarServerErrors,
} from '../../dtos/avatar-dto/avatar-server-errors';
import {
  InternalServerError,
  RequiredFieldServerError,
  RequestRuntimeServerError,
  InvalidFileParameterServerError,
} from '../../dtos/common-dto/common-server-errors';
import {
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  securityServerErrors,
} from '../../dtos/security-dto/security-server-errors';
import {
  userDetailsServerErrors,
} from '../../dtos/user-details-dto/user-details-server-errors';
import {
  passwordManagerServerErrors,
} from '../../dtos/password-manager-dto/password-manager-server-errors';
import LoggerService from '../../../services/logger-service/logger-service';

const domainErrors: Record<DomainErrorCode, ServerErrorFactory> = {
  ...avatarServerErrors,
  ...userServerErrors,
  ...userDetailsServerErrors,
};

const serviceErrors: Record<ServiceErrorCode, ServerErrorFactory> = {
  ...fileServerErrors,
  ...passwordManagerServerErrors,
  ...securityServerErrors,
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

  if (err instanceof multer.MulterError) {
    return res.status(InvalidFileParameterServerError.statusCode).json({
      code: InvalidFileParameterServerError.code,
      error: InvalidFileParameterServerError.error,
    });
  }

  if (err instanceof DomainErrorFactory) {
    const { code, error, statusCode } = domainErrors[err.code];
    return res.status(statusCode).json({ code, error });
  }

  if (err instanceof ServerErrorFactory) {
    const { code, error, statusCode } = err;
    return res.status(statusCode).json({ code, error });
  }

  if (err instanceof ServiceErrorFactory) {
    const { code, error, statusCode } = serviceErrors[err.code];
    return res.status(statusCode).json({ code, error });
  }

  return res.status(InternalServerError.statusCode).json({
    code: InternalServerError.code,
    error: InternalServerError.error,
  });
};

export default errorMiddleware;
