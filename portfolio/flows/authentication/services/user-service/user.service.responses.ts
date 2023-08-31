import { APIResponse } from "@services/api-service/api.service.responses";
import { AvatarResponse } from "../avatar-service/avatar.service.responses";
import { UserDetailsResponse } from "../user-details-service/user-details.service.responses";
import { SocialNetworkResponse } from "../social-network-service/social-network.service.responses";

export type UserResponse = {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: AvatarResponse;
  details?: UserDetailsResponse;
  social_networks: SocialNetworkResponse[];
};

export type UserAPIResponse = APIResponse<UserResponse>;
