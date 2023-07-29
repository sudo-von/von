export type VideoMedia = {
  url: string;
  type: 'video-media';
};

export type UpdateVideoMedia = Omit<VideoMedia, 'type'>;
