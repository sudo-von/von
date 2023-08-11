import {
  SocialNetworkResponse,
} from './social-networks-response-dtos';
import {
  SocialNetwork,
} from '../../../../domain/entities/social-network-entity/social-network-entities';

const socialNetworkToSocialNetworksResponse = (
  socialNetwork: SocialNetwork,
): SocialNetworkResponse => ({
  id: socialNetwork.id,
  src: socialNetwork.src,
  url: socialNetwork.url,
  name: socialNetwork.name,
});

export default socialNetworkToSocialNetworksResponse;
