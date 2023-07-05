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
  metrics: {
    totalViews: model.metrics.totalViews,
    totalAnswers: model.metrics.totalAnswers,
    totalQuestions: model.metrics.totalQuestions,
  },
});

export default userModelToUser;
