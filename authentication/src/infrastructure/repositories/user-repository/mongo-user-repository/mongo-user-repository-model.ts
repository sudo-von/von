import {
  model,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../user-repository-schema';
import userRepositorySchema from './mongo-user-repository-schema';

const UserModel = model<UserRepositorySchema>('user', userRepositorySchema);

export default UserModel;
