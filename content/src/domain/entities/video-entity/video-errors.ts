import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import videoRules from './video-rules';

export const InvalidVideoAltLengthError = createDomainErrorFactory({
  code: 'INVALID_VIDEO_ALT_LENGTH',
  message: `Please provide an alt that consists of ${videoRules.alt.content.MIN_LENGTH} to ${videoRules.alt.content.MAX_LENGTH} characters.`,
});

export const InvalidVideoUrlLengthError = createDomainErrorFactory({
  code: 'INVALID_VIDEO_URL_LENGTH',
  message: `Please provide a url that consists of ${videoRules.url.content.MIN_LENGTH} to ${videoRules.url.content.MAX_LENGTH} characters.`,
});

export const VideoAlreadyCreatedError = createDomainErrorFactory({
  code: 'VIDEO_ALREADY_CREATED',
  error: 'The video has already been created.',
});

export const VideoCreationFailedError = createDomainErrorFactory({
  code: 'VIDEO_CREATION_FAILED',
  error: 'The video you attempted to create could not be created.',
});

export const VideoNotCreatedYetError = createDomainErrorFactory({
  code: 'VIDEO_NOT_CREATED_YET',
  error: 'The video has not been created yet.',
});

export const VideoNotFoundError = createDomainErrorFactory({
  code: 'VIDEO_NOT_FOUND',
  message: 'The requested video could not be found.',
});

export const VideoUpdateFailedError = createDomainErrorFactory({
  code: 'VIDEO_UPDATE_FAILED',
  error: 'The video you attempted to update could not be updated.',
});
