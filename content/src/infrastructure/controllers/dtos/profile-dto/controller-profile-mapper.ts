import {
  ControllerProfileDto,
} from './controller-profile-dto';
import {
  ProfileEntity,
} from '../../../../domain/entities/profile/profile-entity';

const profileEntityToControllerProfileDto = (
  profileEntity: ProfileEntity,
): ControllerProfileDto => ({
  id: profileEntity.id,
  quote: profileEntity.quote,
  interest: profileEntity.interest,
  username: profileEntity.username,
  position: profileEntity.position,
});

export default profileEntityToControllerProfileDto;
