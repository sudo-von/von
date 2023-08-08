import {
  PasswordManagerServerErrorCode,
} from '../../errors/server-error-codes';
import {
  ServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InternalServerError,
} from '../common-dto/common-server-errors';

export const PasswordManagerServiceFailedToCompareServerError = InternalServerError;

export const PasswordManagerServiceFailedToHashServerError = InternalServerError;

export const passwordManagerServerErrors: Record<
PasswordManagerServerErrorCode, ServerErrorFactory
> = {
  PASSWORD_MANAGER_SERVICE_FAILED_TO_COMPARE: PasswordManagerServiceFailedToCompareServerError,
  PASSWORD_MANAGER_SERVICE_FAILED_TO_HASH: PasswordManagerServiceFailedToHashServerError,
};
