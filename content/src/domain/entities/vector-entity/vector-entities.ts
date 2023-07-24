export type VectorCollection = Vector[];

export type Vector = {
  alt: string;
  filename: string;
};

export type VectorFile = Readonly<Pick<Vector, 'alt'> & {
  size: number;
  buffer: Buffer;
  mimetype: string;
}>;

export type CreateVectorFile = VectorFile;

export type UpdateVectorFile = VectorFile;
