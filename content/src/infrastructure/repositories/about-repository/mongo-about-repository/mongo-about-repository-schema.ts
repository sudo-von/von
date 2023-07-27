import {
  Schema,
} from 'mongoose';
import {
  AboutRepositorySchema,
} from '../../../../domain/repositories/about-repository/about-repository-schema';

const aboutRepositorySchema = new Schema<AboutRepositorySchema>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  media: {
    url: {
      type: String,
      required: true,
    },
  },
});

export default aboutRepositorySchema;
