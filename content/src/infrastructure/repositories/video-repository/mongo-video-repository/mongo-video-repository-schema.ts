import {
  Schema,
} from 'mongoose';
import {
  VideoRepositorySchema,
} from '../../../../domain/repositories/video-repository/video-repository-schema';

const videoRepositorySchema = new Schema<VideoRepositorySchema>({
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
    type: {
      type: String,
      required: true,
      enum: ['video'],
      default: 'video',
    },
  },
});

export default videoRepositorySchema;
