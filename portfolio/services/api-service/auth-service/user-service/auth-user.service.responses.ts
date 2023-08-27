import { APIResponse } from "../../../api-service/api.service.responses";
import { AuthAvatarResponse } from "../auth-avatar-service/auth-avatar.service.responses";
import { AuthUserDetailsResponse } from "../auth-user-details-service/auth-user-details.service.responses";
import { AuthSocialNetworkResponse } from "../auth-social-network-service/auth-social-network.service.responses";

export type AuthUserResponse = {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: AuthAvatarResponse;
  details?: AuthUserDetailsResponse;
  social_networks: AuthSocialNetworkResponse[];
};

export type AuthUserAPIResponse = APIResponse<AuthUserResponse>;
