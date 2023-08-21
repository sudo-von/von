import { UserResponse } from "./user.service.response";
import { User } from "../../../features/home/entities/user-entity/user.entities";
import { userDetailsResponseToEntity } from "../user-details-service/user-details.service.mappers";
import { socialNetworkResponseToEntity } from "../social-network-service/social-network.service.mappers";

export const userResponseToEntity = (userResponse: UserResponse): User => ({
  id: userResponse.id,
  name: userResponse.name,
  email: userResponse.email,
  avatar: userResponse.avatar,
  username: userResponse.username,
  details:
    userResponse.details && userDetailsResponseToEntity(userResponse.details),
  socialNetworks: userResponse.social_networks.map((sn) =>
    socialNetworkResponseToEntity(sn)
  ),
});
