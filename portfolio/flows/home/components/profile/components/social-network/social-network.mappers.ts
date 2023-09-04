import { SocialNetworkResponse } from "@authentication/services/social-network-service/social-network.service.responses";

export const toSocialNetworkProps = (
  socialNetworkResponse: SocialNetworkResponse
) => ({
  alt: socialNetworkResponse.name,
  href: socialNetworkResponse.url,
  src: socialNetworkResponse.src,
});
