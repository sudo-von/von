import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import socialNetworkRules from './social-network-rules';

export const InvalidSocialNetworkFileExtensionError = createDomainErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_FILE_EXTENSION',
  message: 'The MIME type provided for the social network file is valid, but the extension is empty.',
});

export const InvalidSocialNetworkFileMimeTypeError = createDomainErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_FILE_MIME_TYPE',
  message: `Please provide a social network file with one of the following MIME types: ${socialNetworkRules.mimetype.ALLOWED_MIMETYPES.join(', ')}.`,
});

export const InvalidSocialNetworkFileSizeError = createDomainErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_FILE_SIZE',
  message: `Please provide a social network file that consists of ${socialNetworkRules.size.MIN_BYTES.toLocaleString()} to ${socialNetworkRules.size.MAX_BYTES.toLocaleString()} bytes.`,
});

export const InvalidSocialNetworkNameLengthError = createDomainErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_NAME_LENGTH',
  message: `Please provide a name that consists of ${socialNetworkRules.name.MIN_LENGTH} to ${socialNetworkRules.name.MAX_LENGTH} characters.`,
});

export const InvalidSocialNetworkUrlLengthError = createDomainErrorFactory({
  code: 'INVALID_SOCIAL_NETWORK_URL_LENGTH',
  message: `Please provide a url that consists of ${socialNetworkRules.url.MIN_LENGTH} to ${socialNetworkRules.url.MAX_LENGTH} characters.`,
});

export const SocialNetworkCreateFailedError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_CREATE_FAILED',
  message: 'The social network you attempted to create could not be created.',
});

export const SocialNetworkDeleteFailedError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_DELETE_FAILED',
  message: 'The scoail network you attempted to delete could not be deleted.',
});

export const SocialNetworkNotFoundError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_NOT_FOUND',
  message: 'The requested social network could not be found.',
});

export const SocialNetworkUpdateFailedError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_UPDATE_FAILED',
  message: 'The social network you attempted to update could not be updated.',
});
