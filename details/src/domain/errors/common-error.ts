import { DomainError } from './error-codes';
import { createDomainErrorFactory } from './error-factory';

export const PERMISSION_DENIED: DomainError = {
  code: 'PERMISSION_DENIED_DOMAIN_ERROR',
  message: 'You do not have permission to access this resource.',
};

export const PermissionDeniedError = createDomainErrorFactory(
  PERMISSION_DENIED,
);
