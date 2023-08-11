import {
  Schema,
} from 'mongoose';
import {
  UserRepositorySchema,
} from '../../../../domain/repositories/user-repository/user-repository-schema';
import userDetailsRepositorySchema from '../../user-details-repository/mongo-user-details-repository/mongo-user-repository-schema';
import socialNetworkRepositorySchema from '../../social-network-repository/mongo-social-network-repository/mongo-social-network-repository-schema';

const userRepositorySchema = new Schema<UserRepositorySchema>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  details: {
    type: userDetailsRepositorySchema,
    required: false,
  },
  social_networks: {
    type: [socialNetworkRepositorySchema],
    required: false,
  },
});

export default userRepositorySchema;
