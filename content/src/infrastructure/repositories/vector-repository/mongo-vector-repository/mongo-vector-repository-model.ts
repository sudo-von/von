import {
  model,
} from 'mongoose';
import vectorRepositorySchema from './mongo-vector-repository-schema';
import {
  VectorRepositorySchema,
} from '../../../../domain/repositories/vector-repository/vector-repository-schema';

const VectorModel = model<VectorRepositorySchema>('vector', vectorRepositorySchema);

export default VectorModel;
