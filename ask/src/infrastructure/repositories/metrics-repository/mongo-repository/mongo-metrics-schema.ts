import {
  Schema,
} from 'mongoose';
import {
  Metrics,
} from '../../../../domain/entities/metric/metric-entities';

const metricsSchema = new Schema<Metrics>({
  totalViews: {
    type: Number,
    required: true,
  },
  totalAnswers: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
});

export default metricsSchema;
