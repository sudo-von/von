import {
  AvatarResponse,
} from './avatar-server-response';
import {
  Avatar,
} from '../../../../domain/entities/avatar-entity/avatar-entities';

const avatarToAvatarResponse = (
  avatar: Avatar,
): AvatarResponse => ({
  name: avatar.name,
});

export default avatarToAvatarResponse;
