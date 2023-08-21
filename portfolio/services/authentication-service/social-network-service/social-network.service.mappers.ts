import { SocialNetworkResponse } from "./social-network.service.response";
import { SocialNetwork } from "../../../features/home/entities/social-network-entity/social-network.entities";

export const socialNetworkResponseToEntity = (
  socialNetworkResponse: SocialNetworkResponse
): SocialNetwork => ({
  id: socialNetworkResponse.id,
  src: socialNetworkResponse.src,
  url: socialNetworkResponse.url,
  name: socialNetworkResponse.name,
});
