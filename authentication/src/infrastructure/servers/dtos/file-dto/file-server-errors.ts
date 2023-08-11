import {
  ServerErrorFactory,
} from '../../errors/server-error-factory';
import {
  InternalServerError,
} from '../common-dto/common-server-errors';
import {
  FileServiceErrorCode,
} from '../../../services/errors/service-error-codes';

export const NoEntityFoundServerError = InternalServerError;

export const FailedToCheckIfExistsServerError = InternalServerError;

export const FailedToDeleteServerError = InternalServerError;

export const FailedToUploadingServerError = InternalServerError;

export const fileServerErrors: Record<FileServiceErrorCode, ServerErrorFactory> = {
  FILE_SERVICE_ENTITY_NOT_FOUND: NoEntityFoundServerError,
  FILE_SERVICE_FAILED_TO_CHECK_IF_EXISTS: FailedToCheckIfExistsServerError,
  FILE_SERVICE_FAILED_TO_DELETE: FailedToDeleteServerError,
  FILE_SERVICE_FAILED_TO_UPLOAD: FailedToUploadingServerError,
};
