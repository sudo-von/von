import {
  model,
  Schema,
} from 'mongoose';
import {
  UserEntity,
} from '../../../../domain/entities/user-entity';

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
  profilePicture: {
    type: String,
    required: true,
  },
});

const UserModel = model<UserEntity>('user', userSchema);

export default UserModel;
