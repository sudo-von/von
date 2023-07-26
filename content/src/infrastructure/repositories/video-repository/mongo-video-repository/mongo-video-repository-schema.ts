import {
  Schema,
} from 'mongoose';
import {
  VideoRepositorySchema,
} from '../../../../domain/repositories/video-repository/video-repository-schema';

const videoRepositorySchema = new Schema<VideoRepositorySchema>({
  type: {
    type: String,
    required: true,
    enum: ['video'],
  },
  alt: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

export default videoRepositorySchema;
