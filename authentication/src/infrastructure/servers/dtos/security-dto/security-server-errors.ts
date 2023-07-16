import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InternalServerError,
} from '../common-dto/common-server-errors';

const SecurityServiceFailedToHashServerError = createServerErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_TO_HASH',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});

export default SecurityServiceFailedToHashServerError;
