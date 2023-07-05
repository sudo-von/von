import {
  Schema,
} from 'mongoose';
import {
  User,
} from '../../../../domain/entities/user/user-entities';
import metricsSchema from '../../metrics-repository/mongo-repository/mongo-metrics-schema';

const userSchema = new Schema<User>({
  userId: {
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
