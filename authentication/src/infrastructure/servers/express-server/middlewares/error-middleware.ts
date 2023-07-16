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
  NoEntityFoundServerError,
  FailedToDeleteServerError,
  FailedToUploadingServerError,
} from '../../dtos/file-dto/file-server-errors';
import {
  UserNotFoundServerError,
  SingleUserOnlyServerError,
  UserUpdateFailedServerError,
  InvalidUsernameLengthServerError,
  InvalidCredentialsServerError,
  InvalidEmailLengthServerError,
  InvalidNameLengthServerError,
  InvalidPasswordLengthServerError,
  UserPermissionDeniedServerError,
} from '../../dtos/user-dto/user-server-errors';
import {
  DomainErrorFactory,
} from '../../../../domain/errors/error-factory';
import {
  ExpiredTokenServerError,
  InvalidTokenServerError,
  TokenServiceFailedTokenGenerationServerError,
} from '../../dtos/token-dto/token-server-errors';
import {
  RequiredFieldServerError,
  InternalServerError,
  RequestRuntimeServerError,
} from '../../dtos/common-dto/common-server-errors';
import {
  ServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import {
  ServiceErrorFactory,
} from '../../../services/errors/service-error-factory';
import {
  AvatarUpdateFailedServerError,
  AvatarNotCreatedYetServerError,
  AvatarAlreadyCreatedServerError,
  AvatarCreationFailedServerError,
  InvalidAvatarFileSizeServerError,
  InvalidAvatarFileMimeTypeServerError,
  InvalidAvatarFileNameLengthServerError,
} from '../../dtos/avatar-dto/avatar-server-errors';
import {
  PasswordManagerServiceFailedToHashPasswordServerError,
  PasswordManagerServiceFailedPasswordComparisonServerError,
} from '../../dtos/password-manager-dto/password-manager-server-errors';
import LoggerService from '../../../services/logger-service/logger-service';
import SecurityServiceFailedToHashServerError from '../../dtos/security-dto/security-server-errors';

const domainErrors: Record<DomainErrorCode, ServerErrorFactory> = {
  AVATAR_ALREADY_CREATED: AvatarAlreadyCreatedServerError,
  AVATAR_CREATION_FAILED: AvatarCreationFailedServerError,
  AVATAR_NOT_CREATED_YET: AvatarNotCreatedYetServerError,
  AVATAR_UPDATE_FAILED: AvatarUpdateFailedServerError,
  INVALID_AVATAR_FILE_MIME_TYPE: InvalidAvatarFileMimeTypeServerError,
  INVALID_AVATAR_FILE_NAME_LENGTH: InvalidAvatarFileNameLengthServerError,
  INVALID_AVATAR_FILE_SIZE: InvalidAvatarFileSizeServerError,
  INVALID_CREDENTIALS: InvalidCredentialsServerError,
  INVALID_EMAIL_LENGTH: InvalidEmailLengthServerError,
  INVALID_NAME_LENGTH: InvalidNameLengthServerError,
  INVALID_PASSWORD_LENGTH: InvalidPasswordLengthServerError,
  INVALID_USERNAME_LENGTH: InvalidUsernameLengthServerError,
  SINGLE_USER_ONLY: SingleUserOnlyServerError,
  USER_PERMISSION_DENIED: UserPermissionDeniedServerError,
  USER_NOT_FOUND: UserNotFoundServerError,
  USER_UPDATE_FAILED: UserUpdateFailedServerError,
};

const serviceErrors: Record<ServiceErrorCode, ServerErrorFactory> = {
  TOKEN_SERVICE_EXPIRED_TOKEN: ExpiredTokenServerError,
  TOKEN_SERVICE_INVALID_TOKEN: InvalidTokenServerError,
  FILE_SERVICE_NO_ENTITY_FOUND: NoEntityFoundServerError,
  FILE_SERVICE_FAILED_TO_DELETE: FailedToDeleteServerError,
  FILE_SERVICE_FAILED_TO_UPLOAD: FailedToUploadingServerError,
  PASSWORD_MANAGER_SERVICE_FAILED_PASSWORD_COMPARISON:
    PasswordManagerServiceFailedPasswordComparisonServerError,
  PASSWORD_MANAGER_SERVICE_FAILED_PASSWORD_HASHING:
    PasswordManagerServiceFailedToHashPasswordServerError,
  SECURITY_SERVICE_FAILED_TO_HASH: SecurityServiceFailedToHashServerError,
  TOKEN_SERVICE_FAILED_TOKEN_GENERATION: TokenServiceFailedTokenGenerationServerError,
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

  return res.status(InternalServerError.statusCode).json({
    code: InternalServerError.code,
    error: InternalServerError.error,
  });
};

export default errorMiddleware;
