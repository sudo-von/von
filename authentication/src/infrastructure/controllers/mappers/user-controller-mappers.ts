import {
  RestrictedUserController,
} from '../dtos/user-controller-dtos';
import {
  RestrictedUser,
} from '../../../domain/entities/user/user-entities';

const restrictedUserToRestrictedUserController = (
  restrictedUser: RestrictedUser,
): RestrictedUserController => ({
  id: restrictedUser.id,
  name: restrictedUser.name,
  email: restrictedUser.email,
  username: restrictedUser.username,
  profile_picture_name: restrictedUser.profilePictureName,
});

export default restrictedUserToRestrictedUserController;
