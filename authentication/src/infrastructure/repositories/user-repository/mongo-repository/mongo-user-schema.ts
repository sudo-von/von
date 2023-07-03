import {
  Schema,
} from 'mongoose';
import {
  UserEntity,
} from '../../../../domain/entities/user/user-entity';

const userSchema = new Schema<UserEntity>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePictureUrl: {
    type: String,
    required: true,
  },
});

export default userSchema;
