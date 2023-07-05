import {
  Schema,
} from 'mongoose';
import {
  User,
} from '../../../../domain/entities/user/user-entities';

const userSchema = new Schema<User>({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export default userSchema;
