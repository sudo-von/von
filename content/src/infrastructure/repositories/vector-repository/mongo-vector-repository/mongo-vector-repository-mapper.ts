import {
  HydratedDocument,
} from 'mongoose';
import {
  VectorCollection,
} from '../../../../domain/entities/vector-entity/vector-entities';
import {
  VectorRepositorySchema,
} from '../../../../domain/repositories/vector-repository/vector-repository-schema';

const vectorDocumentToVectorCollection = (
  document: HydratedDocument<VectorRepositorySchema>,
): VectorCollection => ({
  id: document._id.toHexString(),
  title: document.title,
  subtitle: document.subtitle,
  username: document.username,
  description: document.description,
  media: {
    type: document.media.type,
    vectors: document.media.vectors.map((v) => ({
      id: v.id,
      filename: v.filename,
      description: v.description,
    })),
  },
});

export default vectorDocumentToVectorCollection;
