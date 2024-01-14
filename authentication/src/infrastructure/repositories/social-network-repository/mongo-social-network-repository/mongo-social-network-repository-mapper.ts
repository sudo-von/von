import {
  DetailedSocialNetwork,
} from '../../../../domain/entities/social-network-entity/social-network-entities';
import {
  SocialNetworkRepositorySchema,
} from '../../../../domain/repositories/social-network-repository/social-network-repository-schema';

const socialNetworkDocumentToSocialNetwork = (
  document: SocialNetworkRepositorySchema,
): DetailedSocialNetwork => ({
  id: document.id,
  src: document.src,
  url: document.url,
  name: document.name,
});

export default socialNetworkDocumentToSocialNetwork;
