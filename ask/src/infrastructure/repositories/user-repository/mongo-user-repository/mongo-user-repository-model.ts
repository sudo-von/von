import {
  model,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';
import userRepositorySchema from './mongo-user-repository-schema';

const UserModel = model<UserRepositorySchema>('user', userRepositorySchema);

export default UserModel;
