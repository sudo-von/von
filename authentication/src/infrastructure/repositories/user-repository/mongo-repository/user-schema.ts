import mongoose, { HydratedDocument } from 'mongoose';
import { UserEntity } from '../../../../domain/entities/user-entity';

type Model = Omit<UserEntity, 'id'>;

const userSchema = new mongoose.Schema<Model>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  about: {
    position: {
      type: String,
      required: true,
    },
    interest: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
  },
});

export const UserModel = mongoose.model<Model>('user', userSchema);

export const userModelToUserEntity = (model: HydratedDocument<Model>): UserEntity => ({
  id: model._id.toHexString(),
  name: model.name,
  email: model.email,
  username: model.username,
  password: model.password,
  profilePicture: model.profilePicture,
  about: {
    interest: model.about.interest,
    position: model.about.position,
    quote: model.about.quote,
  },
});
