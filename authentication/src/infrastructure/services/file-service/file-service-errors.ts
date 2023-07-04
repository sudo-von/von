import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const FileServiceENOENTError = createServiceErrorFactory({
  code: 'FILE_SERVICE_ENOENT',
  message: 'The file path does not exist.',
});

export const FileServiceUncaughtDeleteError = createServiceErrorFactory({
  code: 'FILE_SERVICE_UNCAUGHT_DELETE',
  message: 'An error occurred during file delete.',
});

export const FileServiceUncaughtStoreError = createServiceErrorFactory({
  code: 'FILE_SERVICE_UNCAUGHT_STORE',
  message: 'An error occurred during file upload.',
});
