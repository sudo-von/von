import {
  DetailedUserResponse,
} from './user-response-entities';
import {
  DetailedUser,
} from '../../../../../domain/entities/user-entity/user-entities';
import detailedMetricToResponse from '../metric-entity/metric-mapper';

const detailedUserToResponse = (user: DetailedUser): DetailedUserResponse => ({
  id: user.id,
  user_id: user.userId,
  username: user.username,
  metrics: detailedMetricToResponse(user.metrics),
});

export default detailedUserToResponse;
