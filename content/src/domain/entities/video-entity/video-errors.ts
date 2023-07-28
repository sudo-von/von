import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import videoRules from './video-rules';

export const InvalidVideoDomainError = createDomainErrorFactory({
  code: 'INVALID_VIDEO_DOMAIN',
  message: `Please provide a valid domain from the following options: ${videoRules.media.url.content.ALLOWED_DOMAINS.join(', ')}.`,
});

export const InvalidVideoUrlLengthError = createDomainErrorFactory({
  code: 'INVALID_VIDEO_URL_LENGTH',
  message: `Please provide a url that consists of ${videoRules.media.url.content.MIN_LENGTH} to ${videoRules.media.url.content.MAX_LENGTH} characters.`,
});

export const VideoNotFoundError = createDomainErrorFactory({
  code: 'VIDEO_NOT_FOUND',
  message: 'The requested video could not be found.',
});

export const VideoUpdateFailedError = createDomainErrorFactory({
  code: 'VIDEO_UPDATE_FAILED',
  message: 'The video you attempted to update could not be updated.',
});
