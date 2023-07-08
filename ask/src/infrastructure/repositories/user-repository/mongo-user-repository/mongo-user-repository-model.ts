import {
  model,
} from 'mongoose';
import {
  UserSchema,
} from '../user-repository-schema';
import userSchema from './mongo-user-repository-schema';

const UserModel = model<UserSchema>('user', userSchema);

export default UserModel;
