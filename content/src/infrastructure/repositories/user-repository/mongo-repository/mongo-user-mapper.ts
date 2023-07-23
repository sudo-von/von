import {
  HydratedDocument,
} from 'mongoose';
import {
  UserEntity,
} from '../../../../domain/entities/user/user-entity';

const userModelToUserEntity = (model: HydratedDocument<UserEntity>): UserEntity => ({
  id: model._id.toHexString(),
  userId: model.userId,
  username: model.username,
});

export default userModelToUserEntity;
