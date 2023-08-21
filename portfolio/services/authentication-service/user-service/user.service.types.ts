import { APIResponse } from "../../api-service/api.service.types";
import { AvatarResponse } from "../avatar-service/avatar.service.types";
import { UserDetailsResponse } from "../user-details-service/user-details.service.types";
import { SocialNetworkResponse } from "../social-network-service/social-network.service.types";

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
