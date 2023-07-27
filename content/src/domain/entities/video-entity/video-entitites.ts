export type VideoMedia = {
  type: 'video';
  video: Video;
};

export type CreateVideoMedia = {
  type: 'video';
  video: CreateVideo;
};

export type Video = {
  id: string;
  alt: string;
  url: string;
};

export type CreateVideo = Omit<Video, 'id'>;

export type UpdateVideo = Omit<Video, 'id'>;

export type PartialVideo = Partial<Video>;
