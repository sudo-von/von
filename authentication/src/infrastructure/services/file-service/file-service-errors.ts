import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const FileServiceFailedFileDeletion = (
  details: string,
) => createServiceErrorFactory({
  code: 'FILE_SERVICE_FAILED_DELETION',
  message: `An error occurred during file deletion: ${details}.`,
});

export const FileServiceFailedFileUploading = (
  details: string,
) => createServiceErrorFactory({
  code: 'FILE_SERVICE_FAILED_FILE_UPLOADING',
  message: `An error occurred during file uploading: ${details}.`,
});

export const FileServiceNoEntityError = (
  details: string,
) => createServiceErrorFactory({
  code: 'FILE_SERVICE_ERROR_NO_ENTITY',
  message: `The file path does not exist: ${details}.`,
});
