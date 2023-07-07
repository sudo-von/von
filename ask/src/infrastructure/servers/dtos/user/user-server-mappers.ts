import {
  UserServer,
} from './user-server-dtos';
import {
  User,
} from '../../../../domain/entities/user/user-entities';

const userToUserServer = (user: User): UserServer => ({
  id: user.id,
  user_id: user.userId,
  username: user.username,
  metrics: {
    total_views: user.metrics.totalViews,
    total_answers: user.metrics.totalAnswers,
    total_questions: user.metrics.totalQuestions,
  },
});

export default userToUserServer;
