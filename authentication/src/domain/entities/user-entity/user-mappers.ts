import {
  User,
  SecureUser,
} from './user-entities';

const userToSecureUser = (user: User): SecureUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
  username: user.username,
  profilePictureName: user.profilePictureName,
});

export default userToSecureUser;
