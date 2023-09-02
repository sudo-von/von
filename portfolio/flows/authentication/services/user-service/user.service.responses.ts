import { APIResponse } from "@services/api-service/api.service.responses";
import { AvatarResponse } from "@authentication/services/avatar-service/avatar.service.responses";
import { UserDetailsResponse } from "@authentication/services/user-details-service/user-details.service.responses";
import { SocialNetworkResponse } from "@authentication/services/social-network-service/social-network.service.responses";

export type UserResponse = {
  avatar?: AvatarResponse;
  details?: UserDetailsResponse;
  email: string;
  id: string;
  name: string;
  social_networks: SocialNetworkResponse[];
  username: string;
};

export type UserAPIResponse = APIResponse<UserResponse>;
