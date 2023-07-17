import {
  HydratedDocument,
} from 'mongoose';
import {
  User,
} from '../../../../domain/entities/user-entity/user-entities';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';

const userDocumentToUser = (
  document: HydratedDocument<UserRepositorySchema>,
): User => ({
  id: document._id.toHexString(),
  userId: document.user_id,
  username: document.username,
  metrics: {
    totalViews: document.metrics.total_views,
  },
});

export default userDocumentToUser;
