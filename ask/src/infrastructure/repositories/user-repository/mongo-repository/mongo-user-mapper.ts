import {
  HydratedDocument,
} from 'mongoose';
import {
  UserRepository,
} from '../dtos/user-repository-dtos';
import {
  User,
} from '../../../../domain/entities/user/user-entities';

const userModelToUser = (model: HydratedDocument<UserRepository>): User => ({
  id: model._id.toHexString(),
  userId: model.user_id,
  username: model.username,
  metrics: {
    totalViews: model.metrics.total_views,
    totalAnswers: model.metrics.total_answers,
    totalQuestions: model.metrics.total_questions,
  },
});

export default userModelToUser;
