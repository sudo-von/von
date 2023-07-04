import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const FileServiceFailedFileDeletion = createServiceErrorFactory({
  code: 'FILE_SERVICE_FAILED_DELETION',
  message: 'An error occurred during file deletion.',
});

export const FileServiceFailedFileUploading = createServiceErrorFactory({
  code: 'FILE_SERVICE_FAILED_FILE_UPLOADING',
  message: 'An error occurred during file uploading.',
});

export const FileServiceNoEntityError = createServiceErrorFactory({
  code: 'FILE_SERVICE_ERROR_NO_ENTITY',
  message: 'The file path does not exist.',
});
