import {
  HydratedDocument,
} from 'mongoose';
import {
  UserEntity,
} from '../../../../domain/entities/user/user-entity';

const userModelToUserEntity = (model: HydratedDocument<UserEntity>): UserEntity => ({
  id: model._id.toHexString(),
  name: model.name,
  email: model.email,
  username: model.username,
  password: model.password,
  profilePictureUrl: model.profilePictureUrl,
});

export default userModelToUserEntity;
