import { SocialNetworkProps } from "../components/social-network/social-network";
import { AuthSocialNetworkResponse } from "../../../services/api-service/auth-service/auth-social-network-service/auth-social-network.service.responses";

export const socialNetworkToSocialNetworkProps = (
  user: AuthSocialNetworkResponse
): SocialNetworkProps => ({
  src: user.src,
  alt: user.name,
  href: user.url,
});
