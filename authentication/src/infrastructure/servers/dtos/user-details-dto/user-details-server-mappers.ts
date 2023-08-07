import {
  UserDetailsResponse,
} from './user-details-server-response-dtos';
import {
  UserDetails,
} from '../../../../domain/entities/user-details-entity/user-details-entities';

const userDetailsToUserDetailsResponse = (
  userDetails: UserDetails,
): UserDetailsResponse => ({
  quote: userDetails.quote,
  interest: userDetails.interest,
  position: userDetails.position,
});

export default userDetailsToUserDetailsResponse;
