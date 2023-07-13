import {
  DetailedUserResponse,
} from './user-server-response-dtos';
import {
  DetailedUser,
} from '../../../../domain/entities/user-entity/user-entities';

const userToDetailedUserResponse = (user: DetailedUser): DetailedUserResponse => ({
  id: user.id,
  user_id: user.userId,
  username: user.username,
  metrics: {
    total_views: user.metrics.totalViews,
    total_answers: user.metrics.totalAnswers,
    total_questions: user.metrics.totalQuestions,
  },
});

export default userToDetailedUserResponse;
