import {
  model,
} from 'mongoose';
import userSchema from './mongo-user-schema';
import {
  UserEntity,
} from '../../../../domain/entities/user/user-entity';

const UserModel = model<UserEntity>('user', userSchema);

export default UserModel;
