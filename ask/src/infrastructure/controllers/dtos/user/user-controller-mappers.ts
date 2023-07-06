import {
  UserController,
} from './user-controller-dtos';
import {
  User,
} from '../../../../domain/entities/user/user-entities';

const userToUserController = (user: User): UserController => ({
  id: user.id,
  user_id: user.userId,
  username: user.username,
  metrics: {
    total_views: user.metrics.totalViews,
    total_answers: user.metrics.totalAnswers,
    total_questions: user.metrics.totalQuestions,
  },
});

export default userToUserController;
