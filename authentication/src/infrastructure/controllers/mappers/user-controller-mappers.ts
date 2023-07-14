import {
  RestrictedUserController,
} from '../dtos/user-controller-dtos';
import {
  SecureUser,
} from '../../../domain/entities/user-entity/user-entities';

const restrictedUserToRestrictedUserController = (
  restrictedUser: SecureUser,
): RestrictedUserController => ({
  id: restrictedUser.id,
  name: restrictedUser.name,
  email: restrictedUser.email,
  username: restrictedUser.username,
  profile_picture_name: restrictedUser.profilePictureName,
});

export default restrictedUserToRestrictedUserController;
