import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

const FileServiceUncaughtStoreError = createServiceErrorFactory({
  code: 'FILE_SERVICE_UNCAUGHT_STORE',
  message: 'An error occurred during file upload.',
});

export default FileServiceUncaughtStoreError;
