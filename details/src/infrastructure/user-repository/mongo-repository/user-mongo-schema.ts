import mongoose, { HydratedDocument } from 'mongoose';
import { UserEntity } from '../../../domain/entities/user-entity';

const userSchema = new mongoose.Schema<UserEntity>({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export const UserModel = mongoose.model<UserEntity>('user', userSchema);

export const userModelToUserEntity = (model: HydratedDocument<UserEntity>): UserEntity => ({
  id: model._id.toHexString(),
  userId: model.userId,
  username: model.username,
});
