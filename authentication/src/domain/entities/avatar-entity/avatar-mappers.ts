import {
  Avatar,
} from './avatar-entities';
import {
  User,
} from '../user-entity/user-entities';

const userToAvatar = (user: User): Avatar => ({
  name: user.avatar ?? '',
});

export default userToAvatar;
