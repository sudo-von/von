import {
  model,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '@repositories/user-repository/user-repository-schema';
import userSchema from './mongo-user-repository-schema';

const UserModel = model<UserRepositorySchema>('user', userSchema);

export default UserModel;
