import { SocialNetworkProps } from "@home/components/profile/components/social-network/social-network";
import { SocialNetworkResponse } from "@authentication/services/social-network-service/social-network.service.responses";

export const toSocialNetworkProps = (socialNetworkResponse: SocialNetworkResponse): SocialNetworkProps => ({
  alt: socialNetworkResponse.name,
  href: socialNetworkResponse.url,
  src: socialNetworkResponse.src,
});
