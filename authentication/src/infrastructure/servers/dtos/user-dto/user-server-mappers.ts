import {
  SecureUserResponse,
} from './user-server-response-dtos';
import {
  DetailedSecureUser,
} from '../../../../domain/entities/user-entity/user-entities';

const secureUserToSecureUserResponse = (
  secureUser: DetailedSecureUser,
): SecureUserResponse => ({
  id: secureUser.id,
  name: secureUser.name,
  email: secureUser.email,
  avatar: secureUser.avatar,
  username: secureUser.username,
  details: secureUser.details,
});

export default secureUserToSecureUserResponse;
