import {
  Schema,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';
import metricRepositorySchema from '../../metric-repository/mongo-metric-repository/mongo-metric-repository-schema';

const userRepositorySchema = new Schema<UserRepositorySchema>({
  user_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  metrics: {
    type: metricRepositorySchema,
    required: true,
  },
});

export default userRepositorySchema;
