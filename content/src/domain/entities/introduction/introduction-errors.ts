import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import introductionRules from './introduction-rules';

export const IntroductionNotFoundError = createDomainErrorFactory({
  code: 'INTRODUCTION_NOT_FOUND_DOMAIN_ERROR',
  message: 'Introduction not found.',
});

export const IntroductionUpdateFailedError = createDomainErrorFactory({
  code: 'INTRODUCTION_UPDATE_FAILED_DOMAIN_ERROR',
  message: 'Introduction update failed.',
});

export const InvalidIntroductionDescriptionLengthError = createDomainErrorFactory({
  code: 'INVALID_INTRODUCTION_DESCRIPTION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a description that consists of ${introductionRules.description.MIN_LENGTH} to ${introductionRules.description.MAX_LENGTH} characters.`,
});

export const InvalidIntroductionTitleLengthError = createDomainErrorFactory({
  code: 'INVALID_INTRODUCTION_TITLE_LENGTH_DOMAIN_ERROR',
  message: `Please provide a title that consists of ${introductionRules.title.MIN_LENGTH} to ${introductionRules.title.MAX_LENGTH} characters.`,
});

export const SingleIntroductionOnlyError = createDomainErrorFactory({
  code: 'SINGLE_INTRODUCTION_ONLY_DOMAIN_ERROR',
  message: 'Only one introduction is allowed.',
});
