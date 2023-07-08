import {
  model,
} from 'mongoose';
import {
  UserSchema,
} from '../user-repository-schema';
import userSchema from './mongo-user-schema';

const UserModel = model<UserSchema>('user', userSchema);

export default UserModel;
