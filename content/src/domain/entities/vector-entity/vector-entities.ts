import {
  VectorMediaCollection,
  CreateVectorMediaCollection,
  CreateVectorMediaFileCollection,
  UpdateVectorMediaFileCollection,
} from '../media-entity/media-entities';
import {
  Content,
  CreateContent,
  CreateBasicContent,
  UpdateBasicContent,
} from '../content-entity/content-entities';

export type VectorCollection = Content<VectorMediaCollection>;

export type CreateVectorCollection = CreateContent<CreateVectorMediaCollection>;

export type PartialVectorCollection = Partial<VectorCollection>;

export type CreateVectorFileCollection = CreateBasicContent<CreateVectorMediaFileCollection>;

export type UpdateVectorFileCollection = UpdateBasicContent<UpdateVectorMediaFileCollection>;
