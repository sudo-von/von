import { UserDetailsResponse } from "./user-details.service.response";
import { UserDetails } from "../../../features/home/entities/user-details-entity/user-details.entities";

export const userDetailsResponseToEntity = (
  userDetailsResponse: UserDetailsResponse
): UserDetails => ({
  quote: userDetailsResponse.quote,
  interest: userDetailsResponse.interest,
  position: userDetailsResponse.position,
});
