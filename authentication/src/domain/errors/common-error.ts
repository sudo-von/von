import {
  DomainError,
} from './error-codes';
import {
  createDomainErrorFactory,
} from './error-factory';

export const INVALID_CREDENTIALS: DomainError = {
  code: 'INVALID_CREDENTIALS_DOMAIN_ERROR',
  message: 'Please verify your email and password and try again.',
};

export const PERMISSION_DENIED: DomainError = {
  code: 'PERMISSION_DENIED_DOMAIN_ERROR',
  message: 'You do not have permission to access this resource.',
};

export const InvalidCredentialsError = createDomainErrorFactory(INVALID_CREDENTIALS);

export const PermissionDeniedError = createDomainErrorFactory(PERMISSION_DENIED);
