import {
  DetailedUser,
  DetailedSecureUser,
} from './user-entities';

const detailedUserToDetailedSecureUser = (user: DetailedUser): DetailedSecureUser => ({
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
});

export default detailedUserToDetailedSecureUser;
