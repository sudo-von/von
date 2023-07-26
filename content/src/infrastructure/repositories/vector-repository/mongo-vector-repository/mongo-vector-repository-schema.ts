import {
  Schema,
} from 'mongoose';
import {
  VectorRepositorySchema,
  VectorRepositorySchemaCollection,
} from '../../../../domain/repositories/vector-repository/vector-repository-schema';

const vectorRepositorySchema = new Schema<VectorRepositorySchema>({
  alt: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
});

const vectorRepositorySchemaCollection = new Schema<VectorRepositorySchemaCollection>({
  type: {
    type: String,
    required: true,
    enum: ['vector-collection'],
  },
  vectors: [vectorRepositorySchema],
}, {
  _id: false,
});

export default vectorRepositorySchemaCollection;
