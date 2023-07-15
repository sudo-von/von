import {
  User,
  SecureUser,
} from './user-entities';

const userToSecureUser = (user: User): SecureUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
  username: user.username,
});

export default userToSecureUser;
