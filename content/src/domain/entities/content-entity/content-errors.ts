import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import contentRules from './content-rules';

export const ContentNotFoundError = createDomainErrorFactory({
  code: 'CONTENT_NOT_FOUND',
  message: 'The requested content could not be found.',
});

export const ContentUpdateFailedError = createDomainErrorFactory({
  code: 'CONTENT_UPDATE_FAILED',
  message: 'The content you attempted to update could not be updated.',
});

export const InvalidDescriptionLengthError = createDomainErrorFactory({
  code: 'INVALID_DESCRIPTION_LENGTH',
  message: `Please provide a description that consists of ${contentRules.description.content.MIN_LENGTH} to ${contentRules.description.content.MAX_LENGTH} characters.`,
});

export const InvalidSubtitleLengthError = createDomainErrorFactory({
  code: 'INVALID_SUBTITLE_LENGTH',
  message: `Please provide a subtitle that consists of ${contentRules.subtitle.content.MIN_LENGTH} to ${contentRules.subtitle.content.MAX_LENGTH} characters.`,
});

export const InvalidTitleLengthError = createDomainErrorFactory({
  code: 'INVALID_TITLE_LENGTH',
  message: `Please provide a title that consists of ${contentRules.title.content.MIN_LENGTH} to ${contentRules.title.content.MAX_LENGTH} characters.`,
});
