import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const PasswordManagerServiceFailedPasswordComparisonError = (
  details: string,
) => createServiceErrorFactory({
  code: 'PASSWORD_MANAGER_SERVICE_FAILED_PASSWORD_COMPARISON',
  message: `An error occurred during password comparison: ${details}.`,
});

export const PasswordManagerServiceFailedToHashPasswordError = (
  details: string,
) => createServiceErrorFactory({
  code: 'PASSWORD_MANAGER_SERVICE_FAILED_PASSWORD_HASHING',
  message: `An error occurred during password hashing: ${details}.`,
});
