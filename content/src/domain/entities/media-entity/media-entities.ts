import { EmptyMedia } from './empty-media-entities';

export type MediaType = 'empty-media' | 'video-media';

export type Media = EmptyMedia | VideoMedia;

export type VideoMedia = {
  url: string;
  type: 'video-media';
};

export type CreateVideoMedia = VideoMedia;

export type VectorMediaFile = {
  size: number;
  buffer: Buffer;
  mimetype: string;
  description: string;
};

export type CreateVectorMediaFile = VectorMediaFile;

export type UpdateVectorMediaFile = VectorMediaFile;

export type CreateVectorMediaFileCollection = {
  vectors: CreateVectorMediaFile[];
};

export type UpdateVectorMediaFileCollection = {
  vectors: UpdateVectorMediaFile[];
};

export type VectorMedia = {
  id: string;
  filename: string;
  description: string;
};

export type CreateVectorMedia = Omit<VectorMedia, 'id'>;

export type VectorMediaCollection = {
  vectors: VectorMedia[];
  type: 'vector-collection';
};

export type CreateVectorMediaCollection = {
  vectors: CreateVectorMedia[];
  type: 'vector-collection';
};
