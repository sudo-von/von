import {
  HydratedDocument,
} from 'mongoose';
import {
  ProfileEntity,
} from '../../../../domain/entities/profile/profile-entity';

const profileModelToProfileEntity = (
  model: HydratedDocument<ProfileEntity>,
): ProfileEntity => ({
  id: model._id.toHexString(),
  quote: model.quote,
  interest: model.interest,
  position: model.position,
  username: model.username,
});

export default profileModelToProfileEntity;
