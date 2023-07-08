import {
  Schema,
} from 'mongoose';
import {
  UserSchema,
} from '../user-repository-schema';
import metricsSchema from '../../metrics-repository/mongo-repository/mongo-repository-metrics-schema';

const userSchema = new Schema<UserSchema>({
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
