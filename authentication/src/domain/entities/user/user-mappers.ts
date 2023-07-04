import {
  User,
  RestrictedUser,
} from './user-entities';

const userToRestrictedUser = (user: User): RestrictedUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
  username: user.username,
  profilePictureName: user.profilePictureName,
});

export default userToRestrictedUser;
