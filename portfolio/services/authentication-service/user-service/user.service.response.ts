import { APIResponse } from "../../api-service/api.service.responses";
import { AvatarResponse } from "../avatar-service/avatar.service.response";
import { UserDetailsResponse } from "../user-details-service/user-details.service.response";
import { SocialNetworkResponse } from "../social-network-service/social-network.service.response";

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
