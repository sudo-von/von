import {
  SecureUserResponse,
} from './user-server-response-dtos';
import {
  SecureUser,
} from '../../../../domain/entities/user-entity/user-entities';

const secureUserToSecureUserResponse = (
  secureUser: SecureUser,
): SecureUserResponse => ({
  id: secureUser.id,
  name: secureUser.name,
  email: secureUser.email,
  avatar: secureUser.avatar,
  username: secureUser.username,
});

export default secureUserToSecureUserResponse;
