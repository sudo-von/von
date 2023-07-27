import {
  Schema,
} from 'mongoose';
import {
  ContentRepositorySchema,
} from '../../../../domain/repositories/content-repository/content-repository-schema';
import videoRepositorySchema from '../../video-repository/mongo-video-repository/mongo-video-repository-schema';

const contentRepositorySchema = new Schema<ContentRepositorySchema>({
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
    type: {
      type: String,
      required: true,
      enum: ['video', 'timeline-collection', 'vector-collection'],
    },
    video: {
      type: videoRepositorySchema,
      required: false,
    },
  },
}, {
  discriminatorKey: 'kind',
});

export default contentRepositorySchema;
