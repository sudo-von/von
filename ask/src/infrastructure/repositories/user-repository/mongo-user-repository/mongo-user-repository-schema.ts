import {
  Schema,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../user-repository-schema';
import metricsRepositorySchema from '../../metrics-repository/mongo-metrics-repository/mongo-metrics-repository-schema';

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
    type: metricsRepositorySchema,
    required: true,
  },
});

export default userRepositorySchema;
