import {
  HydratedDocument,
} from 'mongoose';
import {
  User,
} from '../../../../domain/entities/user/user-entities';

const userModelToUser = (model: HydratedDocument<User>): User => ({
  id: model._id.toHexString(),
  name: model.name,
  email: model.email,
  username: model.username,
  password: model.password,
  profilePictureName: model.profilePictureName,
});

export default userModelToUser;
