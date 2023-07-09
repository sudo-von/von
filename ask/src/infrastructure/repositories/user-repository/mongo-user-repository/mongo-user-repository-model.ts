import {
  model,
} from 'mongoose';
import userSchema from './mongo-user-repository-schema';
import {
  UserSchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';

const UserModel = model<UserSchema>('user', userSchema);

export default UserModel;
