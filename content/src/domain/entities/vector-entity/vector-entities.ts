export type VectorCollection = {
  vectors: Vector[];
  type: 'vector-collection';
};

export type Vector = {
  id: string;
  alt: string;
  filename: string;
};

export type VectorFile = Pick<Vector, 'alt'> & {
  size: number;
  buffer: Buffer;
  mimetype: string;
};

export type PartialVector = Partial<Vector>;

export type CreateVectorFile = VectorFile;

export type UpdateVectorFile = VectorFile;

export type CreateVector = Omit<Vector, 'id'>;
