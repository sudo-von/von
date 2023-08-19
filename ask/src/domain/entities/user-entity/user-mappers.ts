import {
  BasicUser,
  DetailedUser,
} from './user-entities';

const basicUserToDetailedUser = (
  basicUser: BasicUser,
  totalAnswers: number,
  totalQuestions: number,
): DetailedUser => ({
  id: basicUser.id,
  userId: basicUser.userId,
  username: basicUser.username,
  metrics: {
    totalAnswers,
    totalQuestions,
    totalViews: basicUser.metrics.totalViews,
  },
});

export default basicUserToDetailedUser;
