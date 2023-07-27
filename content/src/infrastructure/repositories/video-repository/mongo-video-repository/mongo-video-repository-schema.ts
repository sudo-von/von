import {
  Schema,
} from 'mongoose';
import {
  VideoRepositorySchema,
} from '../../../../domain/repositories/video-repository/video-repository-schema';

const videoRepositorySchema = new Schema<VideoRepositorySchema>({
  url: {
    type: String,
    required: true,
  },
});

export default videoRepositorySchema;
