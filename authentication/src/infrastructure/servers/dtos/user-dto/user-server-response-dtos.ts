import {
  AvatarResponse,
} from '../avatar-dto/avatar-server-response-dtos';
import {
  UserDetailsResponse,
} from '../user-details-dto/user-details-server-response-dtos';

export type SecureUserResponse = {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: AvatarResponse;
  details?: UserDetailsResponse;
};
