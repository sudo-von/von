import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  FileServiceErrorCode,
} from '../../../services/errors/service-error-codes';
import { InternalServerServerError } from '../common-dto/common-server-errors';

export const NoEntityFoundServerError = createServerErrorFactory({
  code: 'FILE_SERVICE_ENTITY_NOT_FOUND',
  error: InternalServerServerError.message,
  statusCode: InternalServerServerError.statusCode,
});

export const FailedToDeleteServerError = createServerErrorFactory({
  code: 'FILE_SERVICE_FAILED_TO_DELETE',
  error: InternalServerServerError.message,
  statusCode: InternalServerServerError.statusCode,
});

export const FailedToUploadingServerError = createServerErrorFactory({
  code: 'FILE_SERVICE_FAILED_TO_UPLOAD',
  error: InternalServerServerError.message,
  statusCode: InternalServerServerError.statusCode,
});

export const fileServerErrors: Record<FileServiceErrorCode, ServerErrorFactory> = {
  FILE_SERVICE_ENTITY_NOT_FOUND: NoEntityFoundServerError,
  FILE_SERVICE_FAILED_TO_DELETE: FailedToDeleteServerError,
  FILE_SERVICE_FAILED_TO_UPLOAD: FailedToUploadingServerError,
};
