import {
  Schema,
} from 'mongoose';
import {
  MetricsSchema,
} from '../../../../domain/repositories/metrics-repository/metrics-repository-schema';

const metricsSchema = new Schema<MetricsSchema>({
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
  _id: false,
});

export default metricsSchema;
