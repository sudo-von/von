import { ProfileProps } from "@home/components/profile/profile";
import { UserResponse } from "@authentication/services/user-service/user.service.responses";
import { toDetailsProps } from "@home/components/profile/components/details/details.mappers";
import { toSocialNetworkProps } from "@home/components/profile/components/social-network/social-network.mappers";

export const toProfileProps = (user: UserResponse): ProfileProps => ({
  details: user.details && toDetailsProps(user.details),
  name: user.name,
  socialNetworks: user.social_networks.map((sn) => toSocialNetworkProps(sn)),
});
