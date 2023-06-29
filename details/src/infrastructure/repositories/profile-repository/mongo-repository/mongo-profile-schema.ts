import {
  Schema,
} from 'mongoose';
import {
  ProfileEntity,
} from '../../../../domain/entities/profile/profile-entity';

const profileSchema = new Schema<ProfileEntity>({
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

export default profileSchema;
