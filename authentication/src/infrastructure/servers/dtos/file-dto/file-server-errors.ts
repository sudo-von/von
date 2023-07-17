import {
  ServerErrorFactory,
  createServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InternalServerError,
} from '../common-dto/common-server-errors';
import {
  FileServiceErrorCode,
} from '../../../services/errors/service-error-codes';

export const NoEntityFoundServerError = createServerErrorFactory({
  code: 'FILE_SERVICE_ENTITY_NOT_FOUND',
  error: InternalServerError.message,
  statusCode: InternalServerError.statusCode,
});

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

export const fileServerErrors: Record<FileServiceErrorCode, ServerErrorFactory> = {
  FILE_SERVICE_ENTITY_NOT_FOUND: NoEntityFoundServerError,
  FILE_SERVICE_FAILED_TO_DELETE: FailedToDeleteServerError,
  FILE_SERVICE_FAILED_TO_UPLOAD: FailedToUploadingServerError,
};
