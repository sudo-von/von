import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import userRules from './user-rules';

export const InvalidUsernameLengthError = createDomainErrorFactory({
  code: 'INVALID_USERNAME_LENGTH',
  message: `Please provide a username that consists of ${userRules.username.MIN_LENGTH} to ${userRules.username.MAX_LENGTH} characters.`,
});

export const SingleUserOnlyError = createDomainErrorFactory({
  code: 'SINGLE_USER_ONLY',
  message: 'Only one user registration per application is permitted.',
});

export const UserNotFoundError = createDomainErrorFactory({
  code: 'USER_NOT_FOUND',
  message: 'The requested user could not be found.',
});

export const UserPermissionDeniedError = createDomainErrorFactory({
  code: 'USER_PERMISSION_DENIED',
  message: 'You do not have sufficient permissions to perform this action.',
});

export const UserUpdateFailedError = createDomainErrorFactory({
  code: 'USER_UPDATE_FAILED',
  message: 'The user you attempted to update could not be updated.',
});
