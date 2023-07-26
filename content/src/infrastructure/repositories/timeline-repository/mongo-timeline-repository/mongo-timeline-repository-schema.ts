import {
  Schema,
} from 'mongoose';
import {
  TimelineRepositorySchema,
  TimelineRepositorySchemaCollection,
} from '../../../../domain/repositories/timeline-repository/timeline-repository-schema';

const timelineRepositorySchema = new Schema<TimelineRepositorySchema>({
  title: {
    type: String,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const timelineRepositorySchemaCollection = new Schema<TimelineRepositorySchemaCollection>({
  type: {
    type: String,
    required: true,
    enum: ['timeline-collection'],
  },
  timelines: [timelineRepositorySchema],
}, {
  _id: false,
});

export default timelineRepositorySchemaCollection;
