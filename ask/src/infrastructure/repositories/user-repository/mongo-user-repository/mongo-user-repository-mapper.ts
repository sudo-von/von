import {
  HydratedDocument,
} from 'mongoose';
import {
  BasicUser,
} from '@entities/user-entity/user-entities';
import {
  UserRepositorySchema,
} from '@repositories/user-repository/user-repository-schema';

const userDocumentToUser = (document: HydratedDocument<UserRepositorySchema>): BasicUser => ({
  id: document._id.toHexString(),
  userId: document.user_id,
  username: document.username,
  metrics: {
    totalViews: document.metrics.total_views,
  },
});

export default userDocumentToUser;
