import {
  Avatar,
} from './avatar-entities';
import {
  DetailedUser,
} from '../user-entity/user-entities';

const userToAvatar = (user: DetailedUser): Avatar => ({
  name: user.avatar ?? '',
});

export default userToAvatar;
