import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import aboutRules from './about-rules';

export const AboutCreationFailedError = createDomainErrorFactory({
  code: 'ABOUT_CREATION_FAILED_DOMAIN_ERROR',
  message: 'About creation failed.',
});

export const AboutNotFoundError = createDomainErrorFactory({
  code: 'ABOUT_NOT_FOUND_DOMAIN_ERROR',
  message: 'About not found.',
});

export const AboutUpdateFailedError = createDomainErrorFactory({
  code: 'ABOUT_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'About update failed.',
});

export const InvalidAboutDescriptionLengthError = createDomainErrorFactory({
  code: 'INVALID_ABOUT_DESCRIPTION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a description that consists of ${aboutRules.description.MIN_LENGTH} to ${aboutRules.description.MAX_LENGTH} characters.`,
});

export const InvalidAboutTitleLengthError = createDomainErrorFactory({
  code: 'INVALID_ABOUT_TITLE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a title that consists of ${aboutRules.title.MIN_LENGTH} to ${aboutRules.title.MAX_LENGTH} characters.`,
});

export const SingleAboutOnlyError = createDomainErrorFactory({
  code: 'SINGLE_ABOUT_ONLY_DOMAIN_ERROR',
  message: 'Only one about is allowed.',
});
