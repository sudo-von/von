import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import aboutRules from './about-rules';

export const InvalidAboutDomainError = createDomainErrorFactory({
  code: 'INVALID_ABOUT_DOMAIN',
  message: `Please provide a valid domain from the following options: ${aboutRules.media.url.content.ALLOWED_DOMAINS.join(', ')}.`,
});

export const InvalidAboutUrlLengthError = createDomainErrorFactory({
  code: 'INVALID_ABOUT_URL_LENGTH',
  message: `Please provide a url that consists of ${aboutRules.media.url.content.MIN_LENGTH} to ${aboutRules.media.url.content.MAX_LENGTH} characters.`,
});

export const AboutAlreadyCreatedError = createDomainErrorFactory({
  code: 'ABOUT_ALREADY_CREATED',
  error: 'The about has already been created.',
});

export const AboutNotCreatedYetError = createDomainErrorFactory({
  code: 'ABOUT_NOT_CREATED_YET',
  error: 'The about has not been created yet.',
});

export const AboutNotFoundError = createDomainErrorFactory({
  code: 'ABOUT_NOT_FOUND',
  message: 'The requested about could not be found.',
});

export const AboutUpdateFailedError = createDomainErrorFactory({
  code: 'ABOUT_UPDATE_FAILED',
  message: 'The about you attempted to update could not be updated.',
});
