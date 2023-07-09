import {
  UserResponse,
} from './user-server-dtos';
import {
  User,
} from '../../../../domain/entities/user-entity/user-entities';

const userToUserResponse = (user: User): UserResponse => ({
  id: user.id,
  user_id: user.userId,
  username: user.username,
  metrics: {
    total_views: user.metrics.totalViews,
    total_answers: user.metrics.totalAnswers,
    total_questions: user.metrics.totalQuestions,
  },
});

export default userToUserResponse;
