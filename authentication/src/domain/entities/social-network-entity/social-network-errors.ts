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

export const SocialNetworkCreationFailedError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_CREATE_FAILED',
  message: 'The social network you attempted to create could not be created.',
});

export const SocialNetworkDeleteFailedError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_DELETE_FAILED',
  message: 'The social network you attempted to delete could not be deleted.',
});

export const SocialNetworkUpdateFailedError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_UPDATE_FAILED',
  message: 'The social network you attempted to update could not be updated.',
});
