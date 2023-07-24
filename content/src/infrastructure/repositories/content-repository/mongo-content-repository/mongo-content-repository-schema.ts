import {
  Schema,
} from 'mongoose';
import {
  ContentRepositorySchema,
} from '../../../../domain/repositories/content-repository/content-repository-schema';

const contentRepositorySchema = new Schema<ContentRepositorySchema>({
  type: {
    type: String,
    required: true,
  },
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
});

export default contentRepositorySchema;
