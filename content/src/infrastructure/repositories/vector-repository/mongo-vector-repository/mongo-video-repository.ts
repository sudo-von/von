import vectorDocumentToVectorCollection from './mongo-vector-repository-mapper';
import createVectorRepositoryQuery from './mongo-vector-repository-query';
import {
  VectorRepositoryFilters,
} from '../../../../domain/repositories/vector-repository/vector-repository-filters';
import IVectorRepository from '../../../../domain/repositories/vector-repository/vector-repository';
import VectorModel from './mongo-vector-repository-model';
import { CreateVectorCollection, PartialVectorCollection, VectorCollection } from '../../../../domain/entities/vector-entity/vector-entities';

class MongoVectorRepository implements IVectorRepository {
  getVector = async (
    filters?: VectorRepositoryFilters,
  ): Promise<VectorCollection | null> => {
    const query = createVectorRepositoryQuery(filters);
    const vectorDocument = await VectorModel.findOne(query);
    if (!vectorDocument) return null;
    const vector = vectorDocumentToVectorCollection(vectorDocument);
    return vector;
  };

  createVector = async (
    payload: CreateVectorCollection,
  ): Promise<VectorCollection> => {
    const vectorModel = new VectorModel({
      title: payload.title,
      media: payload.media,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
    });
    const vectorDocument = await vectorModel.save();
    const vector = vectorDocumentToVectorCollection(vectorDocument);
    return vector;
  };

  updateVector = async (
    payload: PartialVectorCollection,
    filters?: VectorRepositoryFilters,
  ): Promise<VectorCollection | null> => {
    const query = createVectorRepositoryQuery(filters);
    const vectorDocument = await VectorModel.findOneAndUpdate(query, {
      title: payload.title,
      media: payload.media,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
    }, {
      new: true,
    });
    if (!vectorDocument) return null;
    const vector = vectorDocumentToVectorCollection(vectorDocument);
    return vector;
  };

  updateVectors = async (
    payload: PartialVectorCollection,
    filters?: VectorRepositoryFilters,
  ): Promise<void> => {
    const query = createVectorRepositoryQuery(filters);
    await VectorModel.updateMany(query, {
      title: payload.title,
      media: payload.media,
      subtitle: payload.subtitle,
      username: payload.username,
      description: payload.description,
    });
  };
}

export default MongoVectorRepository;
