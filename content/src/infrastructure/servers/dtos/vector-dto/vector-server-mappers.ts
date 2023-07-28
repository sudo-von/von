import {
  VectorCollectionResponse,
} from './vector-server-response-dtos';
import {
  VectorCollection,
} from '../../../../domain/entities/vector-entity/vector-entities';

const vectorToVectorCollectionReponse = (
  vector: VectorCollection,
): VectorCollectionResponse => ({
  id: vector.id,
  title: vector.title,
  subtitle: vector.subtitle,
  username: vector.username,
  description: vector.description,
  media: {
    type: vector.media.type,
    vectors: vector.media.vectors.map((v) => ({
      id: v.id,
      filename: v.filename,
      description: v.description,
    })),
  },
});

export default vectorToVectorCollectionReponse;
