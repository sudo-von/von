import {
  Schema,
} from 'mongoose';
import {
  MetricsRepository,
} from '../dtos/metrics-repository-dtos';

const metricsSchema = new Schema<MetricsRepository>({
  total_views: {
    type: Number,
    required: true,
  },
  total_answers: {
    type: Number,
    required: true,
  },
  total_questions: {
    type: Number,
    required: true,
  },
}, {
  id: false,
});

export default metricsSchema;
