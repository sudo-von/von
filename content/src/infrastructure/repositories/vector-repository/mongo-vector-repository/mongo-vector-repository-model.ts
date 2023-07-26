import vectorRepositorySchemaCollection from './mongo-vector-repository-schema';
import contentRepositorySchema from '../../content-repository/mongo-content-repository/mongo-content-repository-schema';

const VectorModel = contentRepositorySchema.discriminator('vector-collection', vectorRepositorySchemaCollection);

export default VectorModel;
