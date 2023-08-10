import {
  DetailedUser,
  DetailedSecureUser,
} from './user-entities';

const detailedUserToSecureUser = (user: DetailedUser): DetailedSecureUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  username: user.username,
  details: user.details && {
    quote: user.details.quote,
    interest: user.details.interest,
    position: user.details.position,
  },
  socialNetworks: user.socialNetworks && user.socialNetworks.map((network) => ({
    id: network.id,
    src: network.src,
    url: network.url,
    name: network.name,
  })),
});

export default detailedUserToSecureUser;
