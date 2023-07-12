import {
  Schema,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../user-repository-schema';
import metricsSchema from '../../metrics-repository/mongo-metrics-repository/mongo-metrics-repository-schema';

const userSchema = new Schema<UserRepositorySchema>({
  user_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  metrics: {
    type: metricsSchema,
    required: true,
  },
});

export default userSchema;
