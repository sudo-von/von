import {
  SecureUserResponse,
} from './user-response-entities';
import {
  DetailedSecureUser,
} from '../../../../../domain/entities/user-entity/user-entities';

const detailedSecureUserToResponse = (
  detailedSecureUser: DetailedSecureUser,
): SecureUserResponse => ({
  id: detailedSecureUser.id,
  name: detailedSecureUser.name,
  email: detailedSecureUser.email,
  avatar: detailedSecureUser.avatar ? `http://sudo-von:3000/static/avatars/${detailedSecureUser.avatar}` : undefined,
  username: detailedSecureUser.username,
  details: detailedSecureUser.details && {
    quote: detailedSecureUser.details.quote,
    interest: detailedSecureUser.details.interest,
    position: detailedSecureUser.details.position,
  },
  social_networks: detailedSecureUser.socialNetworks.map((sn) => ({
    id: sn.id,
    src: `http://sudo-von:3000/static/social-networks/${sn.src}`,
    url: sn.url,
    name: sn.name,
  })),
});

export default detailedSecureUserToResponse;
