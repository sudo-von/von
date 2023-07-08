import {
  HydratedDocument,
} from 'mongoose';
import {
  UserSchema,
} from '../user-repository-schema';
import {
  User,
} from '../../../../domain/entities/user/user-entities';

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
