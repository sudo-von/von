import mongoose, { HydratedDocument } from 'mongoose';
import { ProfileEntity } from '../../../../domain/entities/profile/profile-entity';

const profileSchema = new mongoose.Schema<ProfileEntity>({
  quote: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export const ProfileModel = mongoose.model<ProfileEntity>('profile', profileSchema);

export const profileModelToProfileEntity = (
  model: HydratedDocument<ProfileEntity>,
): ProfileEntity => ({
  id: model._id.toHexString(),
  quote: model.quote,
  interest: model.interest,
  position: model.position,
  username: model.username,
});
