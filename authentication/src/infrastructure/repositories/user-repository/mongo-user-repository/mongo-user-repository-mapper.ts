import {
  HydratedDocument,
} from 'mongoose';
import {
  DetailedUser,
} from '../../../../domain/entities/user-entity/user-entities';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';

const userDocumentToUser = (model: HydratedDocument<UserRepositorySchema>): DetailedUser => ({
  id: model._id.toHexString(),
  name: model.name,
  email: model.email,
  avatar: model.avatar,
  details: model.details,
  username: model.username,
  password: model.password,
});

export default userDocumentToUser;
