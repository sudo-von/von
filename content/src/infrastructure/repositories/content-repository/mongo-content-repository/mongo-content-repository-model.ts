import {
  model,
} from 'mongoose';
import contentRepositorySchema from './mongo-content-repository-schema';
import {
  ContentRepositorySchema,
} from '../../../../domain/repositories/content-repository/content-repository-schema';

const ContentModel = model<ContentRepositorySchema>('content', contentRepositorySchema);

export default ContentModel;
