import contentRepositorySchema from '../../content-repository/mongo-content-repository/mongo-content-repository-schema';
import timelineRepositorySchemaCollection from './mongo-timeline-repository-schema';

const TimelineModel = contentRepositorySchema.discriminator('timeline-collection', timelineRepositorySchemaCollection);

export default TimelineModel;
