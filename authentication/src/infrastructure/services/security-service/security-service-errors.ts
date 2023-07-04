import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const SecurityServiceFailedChecksumComputingError = createServiceErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_CHECKSUM_COMPUTING',
  message: 'An error occurred during checksum computing.',
});

export const SecurityServicFailedHashComparisonError = createServiceErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_HASH_COMPARISON',
  message: 'An error occurred during hash comparison.',
});

export const SecurityServiceFailedPasswordHashingError = createServiceErrorFactory({
  code: 'SECURITY_SERVICE_FAILED_PASSWORD_HASHING',
  message: 'An error occurred during password hashing.',
});
