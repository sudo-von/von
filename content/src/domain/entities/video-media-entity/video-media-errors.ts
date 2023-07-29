import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import videoRules from './video-media-rules';

export const InvalidVideoMediaDomainError = createDomainErrorFactory({
  code: 'INVALID_VIDEO_DOMAIN',
  message: `Please provide a valid domain from the following options: ${videoRules.url.content.ALLOWED_DOMAINS.join(', ')}.`,
});

export const InvalidVideoMediaUrlLengthError = createDomainErrorFactory({
  code: 'INVALID_VIDEO_URL_LENGTH',
  message: `Please provide a url that consists of ${videoRules.url.content.MIN_LENGTH} to ${videoRules.url.content.MAX_LENGTH} characters.`,
});
