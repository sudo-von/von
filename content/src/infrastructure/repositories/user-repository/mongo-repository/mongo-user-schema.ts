import {
  Schema,
} from 'mongoose';
import {
  UserEntity,
} from '../../../../domain/entities/user/user-entity';

const userSchema = new Schema<UserEntity>({
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
