import {
  InternalServerError,
} from '../../api-entities/api-errors';
import {
  ServerErrorFactory,
} from '../../../errors/server-error-factory';
import {
  FileServiceErrorCode,
} from '../../../../services/errors/service-error-codes';

export const FileServiceNoEntityFoundServerError = InternalServerError;

export const FileServiceFailedToDeleteServerError = InternalServerError;

export const FileServiceFailedToUploadingServerError = InternalServerError;

export const fileServiceServerErrors: Record<FileServiceErrorCode, ServerErrorFactory> = {
  FILE_SERVICE_ENTITY_NOT_FOUND: FileServiceNoEntityFoundServerError,
  FILE_SERVICE_FAILED_TO_DELETE: FileServiceFailedToDeleteServerError,
  FILE_SERVICE_FAILED_TO_UPLOAD: FileServiceFailedToUploadingServerError,
};
