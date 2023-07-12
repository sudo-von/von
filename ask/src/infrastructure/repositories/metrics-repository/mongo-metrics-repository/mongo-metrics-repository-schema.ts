import {
  Schema,
} from 'mongoose';
import {
  MetricsRepositorySchema,
} from '../metrics-repository-schema';

const metricsSchema = new Schema<MetricsRepositorySchema>({
  total_views: {
    type: Number,
    required: true,
  },
}, {
  _id: false,
});

export default metricsSchema;
