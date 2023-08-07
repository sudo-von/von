import {
  DetailedUser,
  DetailedSecureUser,
} from './user-entities';

const detailedUserToDetailedSecureUser = (user: DetailedUser): DetailedSecureUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  details: user.details,
  username: user.username,
});

export default detailedUserToDetailedSecureUser;
