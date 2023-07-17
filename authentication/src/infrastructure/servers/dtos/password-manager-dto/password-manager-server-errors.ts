import {
  PasswordManagerServerErrorCode,
} from '../../errors/server-error-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InternalServerError,
} from '../common-dto/common-server-errors';

export const PasswordManagerServiceFailedToCompareServerError = createServerErrorFactory({
  code: 'PASSWORD_MANAGER_SERVICE_FAILED_TO_COMPARE',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});

export const PasswordManagerServiceFailedToHashServerError = createServerErrorFactory({
  code: 'PASSWORD_MANAGER_SERVICE_FAILED_TO_HASH',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});

export const passwordManagerServerErrors: Record<
PasswordManagerServerErrorCode, ServerErrorFactory
> = {
  PASSWORD_MANAGER_SERVICE_FAILED_TO_COMPARE: PasswordManagerServiceFailedToCompareServerError,
  PASSWORD_MANAGER_SERVICE_FAILED_TO_HASH: PasswordManagerServiceFailedToHashServerError,
};
