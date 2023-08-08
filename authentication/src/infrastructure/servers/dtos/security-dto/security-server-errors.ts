import {
  SecurityServerErrorCode,
} from '../../errors/server-error-codes';
import {
  ServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InternalServerError,
} from '../common-dto/common-server-errors';

export const SecurityServiceFailedToHashServerError = InternalServerError;

export const securityServerErrors: Record<SecurityServerErrorCode, ServerErrorFactory> = {
  SECURITY_SERVICE_FAILED_TO_HASH: SecurityServiceFailedToHashServerError,
};
