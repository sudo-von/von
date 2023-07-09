import {
  HydratedDocument,
} from 'mongoose';
import {
  User,
} from '../../../../domain/entities/user-entity/user-entities';
import {
  UserSchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';

const userDocumentToUser = (document: HydratedDocument<UserSchema>): User => ({
  id: document._id.toHexString(),
  userId: document.user_id,
  username: document.username,
  metrics: {
    totalViews: document.metrics.total_views,
    totalAnswers: document.metrics.total_answers,
    totalQuestions: document.metrics.total_questions,
  },
});

export default userDocumentToUser;
