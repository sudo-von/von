import {
  DetailedUser,
  DetailedSecureUser,
} from './user-entities';

const detailedUserToSecureUser = (user: DetailedUser): DetailedSecureUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  details: user.details,
  username: user.username,
  socialNetworks: user.socialNetworks,
});

export default detailedUserToSecureUser;
