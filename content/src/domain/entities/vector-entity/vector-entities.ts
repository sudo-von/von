import {
  VectorMediaCollection,
  CreateVectorMediaCollection,
  CreateVectorMediaFileCollection,
  UpdateVectorMediaFileCollection,
} from '../media-entity/media-entities';
import {
  GenericContent,
  CreateGenericContent,
  CreateBasicGenericContent,
  UpdateBasicGenericContent,
} from '../generic-content-entity/generic-content-entities';

export type VectorCollection = GenericContent<VectorMediaCollection>;

export type CreateVectorCollection = CreateGenericContent<CreateVectorMediaCollection>;

export type PartialVectorCollection = Partial<VectorCollection>;

export type CreateVectorFileCollection = CreateBasicGenericContent<CreateVectorMediaFileCollection>;

export type UpdateVectorFileCollection = UpdateBasicGenericContent<UpdateVectorMediaFileCollection>;
