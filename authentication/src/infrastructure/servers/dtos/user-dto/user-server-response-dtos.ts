import {
  UserDetailsResponse,
} from '../user-details-dto/user-details-server-response-dtos';

export type SecureUserResponse = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  username: string;
  details?: UserDetailsResponse;
};
