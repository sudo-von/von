import {
  UserEntity,
  RestrictedUserEntity,
} from './user-entity';

const userEntityToRestrictedUserEntity = (userEntity: UserEntity): RestrictedUserEntity => ({
  id: userEntity.id,
  name: userEntity.name,
  email: userEntity.email,
  username: userEntity.username,
  profilePictureName: userEntity.profilePictureName,
});

export default userEntityToRestrictedUserEntity;
