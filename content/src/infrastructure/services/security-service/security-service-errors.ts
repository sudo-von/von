import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

const SecurityServiceFailedToHashError = (details: string) => createServiceErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_TO_HASH',
  message: `An error occurred during the data hashing process: ${details}.`,
});

export default SecurityServiceFailedToHashError;
