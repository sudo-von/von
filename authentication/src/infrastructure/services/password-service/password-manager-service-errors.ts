import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const PasswordManagerServiceFailedToCompareError = (
  details: string,
) => createServiceErrorFactory({
  code: 'PASSWORD_SERVICE_FAILED_TO_COMPARE',
  message: `An error occurred during password comparison: '${details}'.`,
});

export const PasswordManagerServiceFailedToHashError = (
  details: string,
) => createServiceErrorFactory({
  code: 'PASSWORD_SERVICE_FAILED_TO_HASH',
  message: `An error occurred during password hashing: '${details}'.`,
});
