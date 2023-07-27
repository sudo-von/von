export type VideoRepositoryMediaSchema = {
  type: 'video';
  video: VideoRepositorySchema;
};

export type VideoRepositorySchema = {
  id: string;
  alt: string;
  url: string;
};
