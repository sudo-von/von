import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import technologyRules from './technology-rules';

export const InvalidTechnologyDescriptionLengthError = createDomainErrorFactory({
  code: 'INVALID_TECHNOLOGY_DESCRIPTION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a description that consists of ${technologyRules.description.MIN_LENGTH} to ${technologyRules.description.MAX_LENGTH} characters.`,
});

export const InvalidTechnologyTitleLengthError = createDomainErrorFactory({
  code: 'INVALID_TECHNOLOGY_TITLE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a title that consists of ${technologyRules.title.MIN_LENGTH} to ${technologyRules.title.MAX_LENGTH} characters.`,
});

export const SingleTechnologyOnlyError = createDomainErrorFactory({
  code: 'SINGLE_TECHNOLOGY_ONLY_DOMAIN_ERROR',
  message: 'Only one technology is allowed.',
});

export const TechnologyNotFoundError = createDomainErrorFactory({
  code: 'TECHNOLOGY_NOT_FOUND_DOMAIN_ERROR',
  message: 'Technology not found.',
});

export const TechnologyUpdateFailedError = createDomainErrorFactory({
  code: 'TECHNOLOGY_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'Technology update failed.',
});
