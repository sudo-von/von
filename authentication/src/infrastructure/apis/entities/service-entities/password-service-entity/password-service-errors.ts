import {
  InternalServerError,
} from '../../api-entities/api-errors';
import {
  PasswordServerErrorCode,
} from '../../../errors/server-error-codes';
import {
  ServerErrorFactory,
} from '../../../errors/server-error-factory';

export const PasswordServiceFailedToCompareServerError = InternalServerError;

export const PasswordServiceFailedToHashServerError = InternalServerError;

export const passwordServiceServerErrors: Record<PasswordServerErrorCode, ServerErrorFactory> = {
  PASSWORD_SERVICE_FAILED_TO_COMPARE: PasswordServiceFailedToCompareServerError,
  PASSWORD_SERVICE_FAILED_TO_HASH: PasswordServiceFailedToHashServerError,
};
