import {
  Schema,
} from 'mongoose';
import {
  ContentRepositorySchema,
} from '../../../../domain/repositories/content-repository/content-repository-schema';

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
    mediaData: { type: Schema.Types.Mixed },
  },
}, {
  discriminatorKey: 'type',
});

export default contentRepositorySchema;
