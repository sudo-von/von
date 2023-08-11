import {
  Schema,
} from 'mongoose';
import {
  SocialNetworkRepositorySchema,
} from '../../../../domain/repositories/social-network-repository/social-network-repository-schema';

const socialNetworksRepositorySchema = new Schema<SocialNetworkRepositorySchema>({
  src: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default socialNetworksRepositorySchema;
