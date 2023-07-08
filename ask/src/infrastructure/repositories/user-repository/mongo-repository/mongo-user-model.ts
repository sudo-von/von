import {
  model,
} from 'mongoose';
import {
  UserRepository,
} from '../dtos/user-repository-dtos';
import userSchema from './mongo-user-schema';

const UserModel = model<UserRepository>('user', userSchema);

export default UserModel;
