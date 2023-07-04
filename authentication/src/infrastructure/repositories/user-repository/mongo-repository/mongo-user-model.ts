import {
  model,
} from 'mongoose';
import userSchema from './mongo-user-schema';
import {
  User,
} from '../../../../domain/entities/user/user-entities';

const UserModel = model<User>('user', userSchema);

export default UserModel;
