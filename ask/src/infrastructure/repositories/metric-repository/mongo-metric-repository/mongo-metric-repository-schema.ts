import {
  Schema,
} from 'mongoose';
import {
  MetricRepositorySchema,
} from '../../../../domain/repositories/metric-repository/metric-repository-schema';

const metricRepositorySchema = new Schema<MetricRepositorySchema>({
  total_views: {
    type: Number,
    required: true,
  },
}, {
  _id: false,
});

export default metricRepositorySchema;
