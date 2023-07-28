import {
  SecurityServerErrorCode,
} from '../../errors/server-error-codes';
import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InternalServerServerError,
} from '../common-dto/common-server-errors';

export const SecurityServiceFailedToHashServerError = createServerErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_TO_HASH',
  error: InternalServerServerError.message,
  statusCode: InternalServerServerError.statusCode,
});

export const securityServerErrors: Record<SecurityServerErrorCode, ServerErrorFactory> = {
  SECURITY_SERVICE_FAILED_TO_HASH: SecurityServiceFailedToHashServerError,
};
