import {
  Schema,
} from 'mongoose';
import {
  VectorRepositorySchema,
} from '../../../../domain/repositories/vector-repository/vector-repository-schema';

const vectorRepositorySchema = new Schema<VectorRepositorySchema>({
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
    vectors: [{
      filename: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    }],
    type: {
      type: String,
      required: true,
      enum: ['vector-collection'],
      default: 'vector-collection',
    },
  },
});

export default vectorRepositorySchema;
