import {
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InternalServerError,
} from '../common-dto/common-server-errors';

export const FailedToDeleteServerError = createServerErrorFactory({
  code: 'FILE_SERVICE_FAILED_TO_DELETE',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});

export const FailedToUploadingServerError = createServerErrorFactory({
  code: 'FILE_SERVICE_FAILED_TO_UPLOAD',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});

export const NoEntityFoundServerError = createServerErrorFactory({
  code: 'FILE_SERVICE_NO_ENTITY_FOUND',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});
