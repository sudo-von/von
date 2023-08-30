import { APIResponse } from "../../../../services/api-service/api.service.responses";
import { AuthAvatarResponse } from "../../../../services/api-service/auth-service/auth-avatar-service/auth-avatar.service.responses";
import { AuthUserDetailsResponse } from "../../../../services/api-service/auth-service/auth-user-details-service/auth-user-details.service.responses";
import { AuthSocialNetworkResponse } from "../../../../services/api-service/auth-service/auth-social-network-service/auth-social-network.service.responses";

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
