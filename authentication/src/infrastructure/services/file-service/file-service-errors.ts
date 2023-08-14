import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const FileServiceEntityNotFoundError = (
  details: string,
) => createServiceErrorFactory({
  code: 'FILE_SERVICE_ENTITY_NOT_FOUND',
  message: `The file path does not exist: ${details}.`,
});

export const FileServiceFailedToDeleteError = (
  details: string,
) => createServiceErrorFactory({
  code: 'FILE_SERVICE_FAILED_TO_DELETE',
  message: `An error occurred during file deletion: ${details}.`,
});

export const FileServiceFailedToUploadError = (
  details: string,
) => createServiceErrorFactory({
  code: 'FILE_SERVICE_FAILED_TO_UPLOAD',
  message: `An error occurred during file uploading: ${details}.`,
});
