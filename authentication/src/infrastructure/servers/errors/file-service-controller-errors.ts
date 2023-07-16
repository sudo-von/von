import {
  InternalServerControllerError,
} from './request-controller-errors';
import {
  createControllerErrorFactory,
} from './controller-error-factory';

export const FileServiceFailedDeletionControllerError = createControllerErrorFactory({
  code: 'FILE_SERVICE_FAILED_DELETION',
  message: InternalServerControllerError.message,
  statusCode: InternalServerControllerError.statusCode,
});

export const FileServiceFailedFileUploadingControllerError = createControllerErrorFactory({
  code: 'FILE_SERVICE_FAILED_FILE_UPLOADING',
  message: InternalServerControllerError.message,
  statusCode: InternalServerControllerError.statusCode,
});

export const FileServiceErrorNoEntityControllerError = createControllerErrorFactory({
  code: 'FILE_SERVICE_ERROR_NO_ENTITY',
  message: InternalServerControllerError.message,
  statusCode: InternalServerControllerError.statusCode,
});
