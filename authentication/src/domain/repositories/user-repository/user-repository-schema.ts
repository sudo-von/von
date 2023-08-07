import {
  UserDetailsRepositorySchema,
} from '../user-details-repository/user-details-repository-schema';

export type UserRepositorySchema = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  username: string;
  password: string;
  details?: UserDetailsRepositorySchema;
};
