import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import cybersecurityRules from './cybersecurity-rules';

export const CybersecurityCreationFailedError = createDomainErrorFactory({
  code: 'CYBERSECURITY_CREATION_FAILED_DOMAIN_ERROR',
  message: 'Cybersecurity creation failed.',
});

export const CybersecurityNotFoundError = createDomainErrorFactory({
  code: 'CYBERSECURITY_NOT_FOUND_DOMAIN_ERROR',
  message: 'Cybersecurity not found.',
});

export const CybersecurityUpdateFailedError = createDomainErrorFactory({
  code: 'CYBERSECURITY_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'Cybersecurity update failed.',
});

export const InvalidCybersecurityDescriptionLengthError = createDomainErrorFactory({
  code: 'INVALID_CYBERSECURITY_DESCRIPTION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a description that consists of ${cybersecurityRules.description.MIN_LENGTH} to ${cybersecurityRules.description.MAX_LENGTH} characters.`,
});

export const InvalidCybersecurityTitleLengthError = createDomainErrorFactory({
  code: 'INVALID_CYBERSECURITY_TITLE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a title that consists of ${cybersecurityRules.title.MIN_LENGTH} to ${cybersecurityRules.title.MAX_LENGTH} characters.`,
});

export const SingleCybersecurityOnlyError = createDomainErrorFactory({
  code: 'SINGLE_CYBERSECURITY_ONLY_DOMAIN_ERROR',
  message: 'Only one cybersecurity is allowed.',
});
