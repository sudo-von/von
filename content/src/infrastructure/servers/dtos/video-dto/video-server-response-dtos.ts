export type VideoResponse = {
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: {
    url: string;
    type: 'video';
  }
};
