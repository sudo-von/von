import { ProfileProps } from "@home/components/profile/profile";
import { UserResponse } from "@authentication/services/user-service/user.service.responses";
import { toSocialNetworkProps } from "@home/components/profile/components/social-network/social-network.mappers";

export const toProfileProps = (user: UserResponse): ProfileProps => ({
  details: user.details ? {
    interest: user.details.interest,
    position: user.details.position,
    quote: user.details.quote,
  } : null,
  name: user.name,
  socialNetworks: user.social_networks.map((sn) => toSocialNetworkProps(sn)),
});
