export type Video = {
  id: string;
  url: string;
};

export type CreateVideo = Omit<Video, 'id'>;

export type UpdateVideo = Omit<Video, 'id'>;

export type PartialVideo = Partial<Video>;
