import {
  DetailedUser,
  DetailedSecureUser,
} from './user-entities';

const detailedUserToSecureUser = (user: DetailedUser): DetailedSecureUser => ({
  avatar: user.avatar,
  details: user.details,
  email: user.email,
  id: user.id,
  name: user.name,
  socialNetworks: user.socialNetworks,
  username: user.username,
});

export default detailedUserToSecureUser;
