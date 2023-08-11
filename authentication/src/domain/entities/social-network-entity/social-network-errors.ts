import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import socialNetworkRules from './social-network-rules';

export const InvalidSocialNetworkFileMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_FILE_MIME_TYPE',
  error: `Please provide a social network file with one of the following MIME types: ${socialNetworkRules.mimetype.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidSocialNetworkFileSizeError = createDomainErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_FILE_SIZE',
  error: `Please provide a social network file that consists of ${socialNetworkRules.size.MIN_BYTES.toLocaleString()} to ${socialNetworkRules.size.MAX_BYTES.toLocaleString()} bytes.`,
});

export const InvalidSocialNetworkNameLengthError = createDomainErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_NAME_LENGTH',
  error: `Please provide a name that consists of ${socialNetworkRules.name.MIN_LENGTH} to ${socialNetworkRules.name.MAX_LENGTH} characters.`,
});

export const InvalidSocialNetworkUrlLengthError = createDomainErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_URL_LENGTH',
  error: `Please provide a url that consists of ${socialNetworkRules.url.MIN_LENGTH} to ${socialNetworkRules.url.MAX_LENGTH} characters.`,
});

export const SocialNetworkCreateFailedError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_CREATE_FAILED',
  error: 'The social network you attempted to create could not be created.',
});

export const SocialNetworkNotFoundError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_NOT_FOUND',
  error: 'The requested social network could not be found.',
});

export const SocialNetworkUpdateFailedError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_UPDATE_FAILED',
  error: 'The social network you attempted to update could not be updated.',
});
