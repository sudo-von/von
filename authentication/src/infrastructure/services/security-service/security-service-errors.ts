import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const SecurityServicUncaughtCompareHashesError = createServiceErrorFactory({
  code: 'SECURITY_SERVICE_UNCAUGHT_COMPARE_HASHES',
  message: 'There was an error in the comparePlainAndHash method.',
});

export const SecurityServiceUncaughtHashError = createServiceErrorFactory({
  code: 'SECURITY_SERVICE_UNCAUGHT_HASH',
  message: 'There was an error in the hashData method.',
});

export const SecurityServiceUncaughtHashPasswordError = createServiceErrorFactory({
  code: 'SECURITY_SERVICE_UNCAUGHT_HASH_PASSWORD',
  message: 'There was an error in the hashData method.',
});
