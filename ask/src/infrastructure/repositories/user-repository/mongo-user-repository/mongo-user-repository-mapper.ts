import {
  BasicUser,
} from '../../../../domain/entities/user-entity/user-entities';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';
import metricDocumentToMetric from '../../metric-repository/mongo-metric-repository/mongo-metric-repository-mapper';

const userDocumentToUser = (
  document: UserRepositorySchema,
): BasicUser => ({
  id: document.id,
  userId: document.user_id,
  username: document.username,
  metrics: metricDocumentToMetric(document.metrics),
});

export default userDocumentToUser;
