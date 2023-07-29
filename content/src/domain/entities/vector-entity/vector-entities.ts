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
} from '../content-entity/content-generics';

export type VectorCollection = GenericContent<VectorMediaCollection>;

export type CreateVectorCollection = CreateGenericContent<CreateVectorMediaCollection>;

export type PartialVectorCollection = Partial<VectorCollection>;

export type CreateVectorFileCollection = CreateBasicGenericContent<CreateVectorMediaFileCollection>;

export type UpdateVectorFileCollection = UpdateBasicGenericContent<UpdateVectorMediaFileCollection>;
