import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import cybersecurityRules from './cybersecurity-rules';

export const InvalidCybersecurityDomainError = createDomainErrorFactory({
  code: 'INVALID_CYBERSECURITY_DOMAIN',
  message: `Please provide a valid domain from the following options: ${cybersecurityRules.media.url.content.ALLOWED_DOMAINS.join(', ')}.`,
});

export const InvalidCybersecurityUrlLengthError = createDomainErrorFactory({
  code: 'INVALID_CYBERSECURITY_URL_LENGTH',
  message: `Please provide a url that consists of ${cybersecurityRules.media.url.content.MIN_LENGTH} to ${cybersecurityRules.media.url.content.MAX_LENGTH} characters.`,
});

export const CybersecurityAlreadyCreatedError = createDomainErrorFactory({
  code: 'CYBERSECURITY_ALREADY_CREATED',
  message: 'The cybersecurity has already been created.',
});

export const CybersecurityNotCreatedYetError = createDomainErrorFactory({
  code: 'CYBERSECURITY_NOT_CREATED_YET',
  message: 'The cybersecurity has not been created yet.',
});

export const CybersecurityNotFoundError = createDomainErrorFactory({
  code: 'CYBERSECURITY_NOT_FOUND',
  message: 'The requested cybersecurity could not be found.',
});

export const CybersecurityUpdateFailedError = createDomainErrorFactory({
  code: 'CYBERSECURITY_UPDATE_FAILED',
  message: 'The cybersecurity you attempted to update could not be updated.',
});
