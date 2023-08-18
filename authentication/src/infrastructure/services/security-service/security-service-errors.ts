import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const SecurityServiceFailedToHashError = (
  details: string,
) => createServiceErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_TO_HASH',
  message: `An error occurred during the data hashing process: '${details}'.`,
});

export const SecurityServiceFailedToRandomHashError = (
  details: string,
) => createServiceErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_TO_RANDOM_HASH',
  message: `An error occurred during the random data hashing process: '${details}'.`,
});
