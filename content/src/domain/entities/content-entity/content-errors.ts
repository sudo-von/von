import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import contentRules from './content-rules';

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

export const InvalidTypeLengthError = createDomainErrorFactory({
  code: 'INVALID_TYPE_LENGTH',
  message: `Please provide a type that consists of ${contentRules.type.content.MIN_LENGTH} to ${contentRules.type.content.MAX_LENGTH} characters.`,
});
