import {
  createDomainErrorFactory,
} from '../error-entity/error-entities';
import socialNetworkRules from './social-network-rules';

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
  message: 'The social network you attempted to delete could not be deleted.',
});

export const SocialNetworkNotFoundError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_NOT_FOUND',
  message: 'The requested social network could not be found.',
});

export const SocialNetworkUpdateFailedError = createDomainErrorFactory({
  code: 'SOCIAL_NETWORK_UPDATE_FAILED',
  message: 'The social network you attempted to update could not be updated.',
});
