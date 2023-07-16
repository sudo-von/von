import {
  HydratedDocument,
} from 'mongoose';
import {
  User,
} from '../../../../domain/entities/user-entity/user-entities';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';

const userDocumentToUser = (model: HydratedDocument<UserRepositorySchema>): User => ({
  id: model._id.toHexString(),
  name: model.name,
  email: model.email,
  avatar: model.avatar,
  username: model.username,
  password: model.password,
});

export default userDocumentToUser;
