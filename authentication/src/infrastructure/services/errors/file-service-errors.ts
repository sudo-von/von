import {
  createServiceErrorFactory,
} from './service-error-factory';

const FileServiceInvalidStoreError = createServiceErrorFactory({
  code: 'FILE_SERVICE_INVALID_STORE_ERROR',
  message: 'There was an error in the store method.',
});

export default FileServiceInvalidStoreError;
