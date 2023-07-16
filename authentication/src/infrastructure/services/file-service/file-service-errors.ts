import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const FileServiceFailedFileDeletion = (
  details: string,
) => createServiceErrorFactory({
  code: 'FILE_SERVICE_FAILED_TO_DELETE',
  message: `An error occurred during file deletion: ${details}.`,
});

export const FileServiceFailedFileUploading = (
  details: string,
) => createServiceErrorFactory({
  code: 'FILE_SERVICE_FAILED_TO_UPLOAD',
  message: `An error occurred during file uploading: ${details}.`,
});

export const FileServiceNoEntityError = (
  details: string,
) => createServiceErrorFactory({
  code: 'FILE_SERVICE_NO_ENTITY_FOUND',
  message: `The file path does not exist: ${details}.`,
});
