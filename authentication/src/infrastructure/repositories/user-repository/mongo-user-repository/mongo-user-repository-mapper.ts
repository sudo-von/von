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
  id: model.id.toString(),
  name: model.name,
  email: model.email,
  avatar: model.avatar,
  username: model.username,
  password: model.password,
  details: model.details && {
    quote: model.details.quote,
    interest: model.details.interest,
    position: model.details.position,
  },
});

export default userDocumentToUser;
