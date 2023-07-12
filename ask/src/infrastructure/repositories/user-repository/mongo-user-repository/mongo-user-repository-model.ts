import {
  model,
} from 'mongoose';
import userSchema from './mongo-user-repository-schema';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';

const UserModel = model<UserRepositorySchema>('user', userSchema);

export default UserModel;
