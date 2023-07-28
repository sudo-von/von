import {
  model,
} from 'mongoose';
import aboutRepositorySchema from './mongo-about-repository-schema';
import {
  AboutRepositorySchema,
} from '../../../../domain/repositories/about-repository/about-repository-schema';

const AboutModel = model<AboutRepositorySchema>('about', aboutRepositorySchema);

export default AboutModel;
