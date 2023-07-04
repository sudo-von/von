import {
  Schema,
} from 'mongoose';
import {
  User,
} from '../../../../domain/entities/user/user-entities';

const userSchema = new Schema<User>({
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
  profilePictureName: {
    type: String,
    required: true,
  },
});

export default userSchema;
