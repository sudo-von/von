import {
  HydratedDocument,
} from 'mongoose';
import {
  User,
} from '../../../../domain/entities/user/user-entities';

const userModelToUser = (model: HydratedDocument<User>): User => ({
  id: model._id.toHexString(),
  userId: model.userId,
  username: model.username,
});

export default userModelToUser;
