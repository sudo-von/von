import { createServerErrorFactory } from '../../errors/server-error-factory';
import { InternalServerError } from '../common-dto/common-server-errors';

export const PasswordManagerServiceFailedPasswordComparisonServerError = createServerErrorFactory({
  code: 'PASSWORD_MANAGER_SERVICE_FAILED_PASSWORD_COMPARISON',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});

export const PasswordManagerServiceFailedToHashPasswordServerError = createServerErrorFactory({
  code: 'PASSWORD_MANAGER_SERVICE_FAILED_PASSWORD_HASHING',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});
