export type Video = {
  id: string;
  alt: string;
  url: string;
  type: 'video';
};

export type PartialVideo = Partial<Omit<Video, 'type'>>;

export type CreateVideo = Omit<Video, 'id' | 'type'>;

export type UpdateVideo = Omit<Video, 'id' | 'type'>;
