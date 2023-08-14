import {
  InternalServerError,
} from '../../api-entities/api-errors';
import {
  SecurityServerErrorCode,
} from '../../../errors/server-error-codes';
import {
  ServerErrorFactory,
} from '../../../errors/server-error-factory';

export const SecurityServiceFailedToHashServerError = InternalServerError;

export const SecurityServiceFailedToRandomHashServerError = InternalServerError;

export const securityServiceServerErrors: Record<SecurityServerErrorCode, ServerErrorFactory> = {
  SECURITY_SERVICE_FAILED_TO_HASH: SecurityServiceFailedToHashServerError,
  SECURITY_SERVICE_FAILED_TO_RANDOM_HASH: SecurityServiceFailedToRandomHashServerError,
};
