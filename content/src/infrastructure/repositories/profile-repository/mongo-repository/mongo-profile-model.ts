import {
  model,
} from 'mongoose';
import profileSchema from './mongo-profile-schema';
import {
  ProfileEntity,
} from '../../../../domain/entities/profile/profile-entity';

const ProfileModel = model<ProfileEntity>('profile', profileSchema);

export default ProfileModel;
