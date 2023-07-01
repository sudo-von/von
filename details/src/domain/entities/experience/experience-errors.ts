import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import experienceRules from './experience-rules';

export const ExperienceCreationFailedError = createDomainErrorFactory({
  code: 'EXPERIENCE_CREATION_FAILED_DOMAIN_ERROR',
  message: 'Experience creation failed.',
});

export const ExperienceNotFoundError = createDomainErrorFactory({
  code: 'EXPERIENCE_NOT_FOUND_DOMAIN_ERROR',
  message: 'Experience not found.',
});

export const ExperienceUpdateFailedError = createDomainErrorFactory({
  code: 'EXPERIENCE_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'Experience update failed.',
});

export const InvalidExperienceDescriptionLengthError = createDomainErrorFactory({
  code: 'INVALID_EXPERIENCE_DESCRIPTION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a description that consists of ${experienceRules.description.MIN_LENGTH} to ${experienceRules.description.MAX_LENGTH} characters.`,
});

export const InvalidExperienceTitleLengthError = createDomainErrorFactory({
  code: 'INVALID_EXPERIENCE_TITLE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a title that consists of ${experienceRules.title.MIN_LENGTH} to ${experienceRules.title.MAX_LENGTH} characters.`,
});

export const SingleExperienceOnlyError = createDomainErrorFactory({
  code: 'SINGLE_EXPERIENCE_ONLY_DOMAIN_ERROR',
  message: 'Only one experience is allowed.',
});
