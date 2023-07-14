import {
  HydratedDocument,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../user-repository-schema';
import {
  User,
} from '../../../../domain/entities/user-entity/user-entities';

const userDocumentToUser = (model: HydratedDocument<UserRepositorySchema>): User => ({
  id: model._id.toHexString(),
  name: model.name,
  email: model.email,
  avatar: model.avatar,
  username: model.username,
  password: model.password,
});

export default userDocumentToUser;
