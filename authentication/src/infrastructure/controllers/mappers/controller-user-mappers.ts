import { RestrictedUser } from '../../../domain/entities/user/user-entities';
import { RestrictedUserControllerDto } from '../dtos/controller-user-dto';

const restrictedUserEntityToRestrictedUserControllerDto = (
  restrictedUserEntity: RestrictedUser,
): RestrictedUserControllerDto => ({
  id: restrictedUserEntity.id,
  name: restrictedUserEntity.name,
  email: restrictedUserEntity.email,
  username: restrictedUserEntity.username,
  profile_picture_name: restrictedUserEntity.profilePictureName,
});

export default restrictedUserEntityToRestrictedUserControllerDto;
