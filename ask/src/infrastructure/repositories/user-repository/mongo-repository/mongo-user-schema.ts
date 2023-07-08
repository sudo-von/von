import {
  Schema,
} from 'mongoose';
import {
  UserRepository,
} from '../dtos/user-repository-dtos';
import metricsSchema from '../../metrics-repository/mongo-repository/mongo-metrics-schema';

const userSchema = new Schema<UserRepository>({
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
